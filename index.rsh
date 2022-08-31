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

    const Dealer = Participant('Dealer', {
        ...User,
        wager: UInt,
        deadline: UInt,
    });
    const Player = Participant('Player', {
        ...User,
        acceptWager: Fun([UInt], Null),
    });

    init();


    const informTimeout = () => {
        each([Dealer, Player], () => {
            interact.informTimeout();
        });
    };

    // [1] DEALER sends her wager
    // [2] PLAYER accepts the wager
    // WHILE LOOP
    // [3] DEALER sends her commitment
    // [4] PLAYER sends his hand
    // 5 DEALER reveals her hand
    // 6 If it's draw, return to step 3; otherwise, the game ends


    // DEALER SENDS WAGER
    Dealer.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    Dealer.publish(wager, deadline)
        .pay(wager);
    commit();

    // PLAYER ACCEPTS WAGER
    Player.only(() => {
        interact.acceptWager(wager);
    });
    Player.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Dealer, informTimeout));

    // WHILE LOOP        

    var loopOutcome = [0, 0];
    invariant(balance() == 2 * wager && isOutcome(loopOutcome));
    while (loopOutcome == [0, 0]) {
        commit();
        // DEALER SENDS COMMITMENT 
        Dealer.only(() => {
            const _handDealer = interact.drawCards();
            const [_commitDealer, _saltDealer] = makeCommitment(interact, _handDealer);
            const commitDealer = declassify(_commitDealer);
        });
        Dealer.publish(commitDealer)
            .timeout(relativeTime(deadline), () => closeTo(Player, informTimeout));
        commit();

        // PLAYER SENDS HAND
        unknowable(Player, Dealer(_handDealer, _saltDealer));
        Player.only(() => {
            const handPlayer = declassify(interact.drawCards());
        });
        Player.publish(handPlayer)
            .timeout(relativeTime(deadline), () => closeTo(Dealer, informTimeout));
        commit();

        // DEALER REVEALS HAND
        Dealer.only(() => {
            const saltDealer = declassify(_saltDealer);
            const handDealer = declassify(_handDealer);
        });
        Dealer.publish(saltDealer, handDealer)
            .timeout(relativeTime(deadline), () => closeTo(Player, informTimeout));
        checkCommitment(commitDealer, saltDealer, handDealer);
        commit();

        // PLAYER COMPUTES OUTCOME
        Player.only(() => {
            const [outcomeDealer, outcomePlayer] =
                (handDealer == handPlayer) ? [0, 0] :
                    (handDealer == 21) ? [2, 1] :
                        (handPlayer == 21) ? [1, 2] :
                            (handPlayer > 21) ? [4, 3] :
                                (handDealer > 21) ? [3, 4] :
                                    (handPlayer > handDealer) ? [6, 5] :
                                        [5, 6];
        });
        Player.publish(outcomeDealer, outcomePlayer);
        // winner is computed
        // const [outcomeDealer, outcomePlayer] =
        //     (handDealer == handPlayer) ? [0, 0] :
        //     (handDealer == 21) ? [2, 1] :
        //     (handPlayer == 21) ? [1, 2] :
        //     (handPlayer > 21) ? [4, 3] :
        //     (handDealer > 21) ? [3, 4] :
        //     (handPlayer > handDealer) ? [6, 5] :
        //     [5, 6];

        // Player.only(() => {
        //     const forPlayer =
        //     outcomePlayer == 0 ? 1 : 
        //     outcomePlayer == 1 ? 0 :
        //     outcomePlayer == 2 ? 2 :
        //     outcomePlayer == 3 ? 0 :
        //     outcomePlayer == 4 ? 2 :
        //     outcomePlayer == 5 ? 2 :
        //     outcomePlayer == 6 ? 0 :
        //     1 ;   
        // });
        // Player.publish(forPlayer);
        // commit();

        // Dealer.only(() => {
        //     const forDealer = 
        //     outcomeDealer == 0 ? 1 : 
        //     outcomeDealer == 1 ? 0 :
        //     outcomeDealer == 2 ? 2 :
        //     outcomeDealer == 3 ? 0 :
        //     outcomeDealer == 4 ? 2 :
        //     outcomeDealer == 5 ? 2 :
        //     outcomeDealer == 6 ? 0 :
        //     1 ;   
        // });
        // Dealer.publish(forDealer);
        // loopOutcomePlayer = outcomePlayer;
        // this is for the while loop
        loopOutcome = [outcomeDealer, outcomePlayer];
        continue;
    }
    commit();

    Player.only(() => {
        const forPlayer =
            loopOutcome[1] == 0 ? 1 :
                loopOutcome[1] == 1 ? 0 :
                    loopOutcome[1] == 2 ? 2 :
                        loopOutcome[1] == 3 ? 0 :
                            loopOutcome[1] == 4 ? 2 :
                                loopOutcome[1] == 5 ? 2 :
                                    loopOutcome[1] == 6 ? 0 :
                                        1;
    });
    Player.publish(forPlayer);
    commit();

    Dealer.only(() => {
        const forDealer =
            loopOutcome[0] == 0 ? 1 :
                loopOutcome[0] == 1 ? 0 :
                    loopOutcome[0] == 2 ? 2 :
                        loopOutcome[0] == 3 ? 0 :
                            loopOutcome[0] == 4 ? 2 :
                                loopOutcome[0] == 5 ? 2 :
                                    loopOutcome[0] == 6 ? 0 :
                                        1;
    });
    Dealer.publish(forDealer);

    transfer(forPlayer * wager).to(Player);
    transfer(forDealer * wager).to(Dealer);

    commit();

    Player.only(() => {
        interact.seeOutcome(loopOutcome[0]);
    });

    Dealer.only(() => {
        interact.seeOutcome(loopOutcome[1]);
    });

});

