// theorems failing
// balance not 0 at application exit ./index.rsh:138:35:application
// balance not sufficient for trandefer ./index.rsh:139:35:application
// while invariant after loop ./index.rsh:63:15:invariant
// while invariant after loop ./index.rsh:63:15:invariant

'reach 0.1';

const outcomeLoop = ['Draw.', 'Lose, opponent has Blackjack.', 'Win with a Blackjack.', 'You went over. You lose.', 'Opponent went over. You win.', 'You win.', 'You lose.'];
const [isOutcome, DRAW, LOS_OPPONENT_HAS_BLACKJACK, WIN_WITH_A_BLACKJACK, YOU_WENT_OVER_YOU_LOSE, OPPONENT_WENT_OVER_YOU_WIB, YOU_WIN, YOU_LOSE] = makeEnum(7);



const User = {
    // adds random features
    ...hasRandom,
    // returns number
    drawCards: Fun([], UInt),
    // receives number
    seeOutcome: Fun([UInt], Null),
    // adding timeout function to return users funds in case of non participation
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    // dealer participant is able to wager, draw cards, see outcome, and inform timeout
    const Dealer = Participant('Dealer', {
        ...User,
        wager: UInt,
        deadline: UInt,
    });
    // player participant is able to accept a wager, draw cards, see outcome, and inform timeout
    const Player = Participant('Player', {
        ...User,
        acceptWager: Fun([UInt], Null),
    });

    // [0]the dapp initializes
    init();

    // this function informs both players of a timeout
    const informTimeout = () => {
        each([Dealer, Player], () => {
            interact.informTimeout();
        });
    };

    // [1] dealer sends wager to player
    Dealer.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    Dealer.publish(wager, deadline)
        .pay(wager);
    commit();

    // [2] player accepts the wager
    Player.only(() => {
        interact.acceptWager(wager);
    });
    Player.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Dealer, informTimeout));

    // WHILE LOOP        

    var loopOutcome = 00;
    // invariant expression must be true before and after
    // every execution of the block
    invariant(balance() == 2 * wager && isOutcome(loopOutcome));
    while (loopOutcome == 00) {
        commit();
        // [3] dealer sends commitment
        Dealer.only(() => {
            const _handDealer = interact.drawCards();
            const [_commitDealer, _saltDealer] = makeCommitment(interact, _handDealer);
            const commitDealer = declassify(_commitDealer);
        });
        Dealer.publish(commitDealer)
            .timeout(relativeTime(deadline), () => closeTo(Player, informTimeout));
        commit();

        // [4] player sends hand
        unknowable(Player, Dealer(_handDealer, _saltDealer));
        Player.only(() => {
            const handPlayer = declassify(interact.drawCards());
        });
        Player.publish(handPlayer)
            .timeout(relativeTime(deadline), () => closeTo(Dealer, informTimeout));
        commit();

        // [5] dealer reveals hand
        Dealer.only(() => {
            const saltDealer = declassify(_saltDealer);
            const handDealer = declassify(_handDealer);
        });
        Dealer.publish(saltDealer, handDealer)
            .timeout(relativeTime(deadline), () => closeTo(Player, informTimeout));
        checkCommitment(commitDealer, saltDealer, handDealer);
        commit();

        // [6] player computes outcome
        Player.only(() => {
            const outcome =          // first digit is outcomeDealer, second is outcomePlayer
                (handDealer == handPlayer) ? 00 :
                (handDealer == 21) ? 21 :
                (handPlayer == 21) ? 12 :
                (handPlayer > 21) ? 43 :
                (handDealer > 21) ? 34 :
                (handPlayer > handDealer) ? 65 :
                56;
        })
        Player.publish(outcome);
        
        // this is for the while loop
        loopOutcome = outcome;
        continue;
    }
    commit();

    // [7] dealer computes and shares number of stakes won for dealer and player
    Dealer.only(() => {
        const [forDealer, forPlayer] =
            // draw, one share returned to each participant
            loopOutcome == 00 ? [1, 1] :
            // dealer wins with blackjack, two shares paid to dealer
            loopOutcome == 21 ? [2, 0] :
            // player wins with blackjack, two shares paid to player 
            loopOutcome == 12 ? [0, 2] :
            // player went over, two shars paid to dealer
            loopOutcome == 43 ? [2, 0] :
            // dealer went over, two shares paid to player
            loopOutcome == 34 ? [0, 2] :
            // player wins, two shares sent to player
            loopOutcome == 65 ? [0, 2] :
            // dealer wins, two shares sent to dealer
            loopOutcome == 56 ? [2, 0] :
            // otherwise send one share back to each participant
            [1, 1];
    });
    // dealer publishes the shares alloted for dealer and player
    Dealer.publish(forDealer, forPlayer);

    // [8] stakes are paid
    transfer(forPlayer * wager).to(Player);
    transfer(forDealer * wager).to(Dealer);

    commit();

    // player determines which message each particpant should be shown
    // this essentially destructures the loopOutcome to tell us which message to display for each participant 
    Dealer.only(() => {
        const [messageDealer, messagePlayer] =
            loopOutcome == 00 ? [0, 0] :
            loopOutcome == 21 ? [2, 1] :
            loopOutcome == 12 ? [1, 2] :
            loopOutcome == 43 ? [4, 3] :
            loopOutcome == 34 ? [3, 4] :
            loopOutcome == 65 ? [6, 5] :
            loopOutcome == 56 ? [5, 6] :
            [0, 0];
    });
    // dealer publishes the messages each participant should see
    Dealer.publish(messageDealer, messagePlayer);
    // ending the consensus step
    commit();



    // [9] both players are shown the outcome
    Player.only(() => {
        interact.seeOutcome(messagePlayer);
    });

    Dealer.only(() => {
        interact.seeOutcome(messageDealer);
    });

});