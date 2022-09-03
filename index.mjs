import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

// creates a starting balance by using the parse currency method from the standard library
const startingBalance = stdlib.parseCurrency(100);
// create two accounts for the two players who will be playing black jack
const accDealer = await stdlib.newTestAccount(startingBalance);
const accPlayer = await stdlib.newTestAccount(startingBalance);

// helper function for displaying current amounts with up to 4 decimal places
const fmt = (x) => stdlib.formatCurrency(x, 4);
// helper function for getting balance of partipant and displaying it with up to 4 decimal places
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
// not we get the balance of the dealer and player before the start of the game
const beforeBalanceDealer = await getBalance(accDealer);
const beforeBalancePlayer = await getBalance(accPlayer);

// dealer deploys the contract with the backend as the parameter
const ctcDealer = accDealer.contract(backend); 
// player attaches to the contract
const ctcPlayer = accPlayer.contract(backend, ctcDealer.getInfo());

const CARDS = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const OUTCOME = ['Draw.', 'Lose, opponent has Blackjack.', 'Win with a Blackjack.', 'You went over. You lose.', 'Opponent went over. You win.', 'You win.', 'You lose.'];

// constructor for the user implementation
const User = (Who) => ({
    ...stdlib.hasRandom,    // gives users access to randomization methods
    drawCards: () => {
        // hand returns a random number from 2 through 21
        const hand = CARDS[parseInt(Math.random() * 13)] + CARDS[parseInt(Math.random() * 13)]
        console.log(`${Who} played ${hand}`)
        return hand;
    },
    // passing in the outcome as a number to index from the OUTCOME list
    seeOutcome: (outcome) => {
        // logging the outcome
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`)
    },
    informTimeout: () => {
        console.log(`${Who} observed a timeout.`)
    },
});


// waits for the backends to complete 
// instantiate implementation once for dealer and once for player
await Promise.all([
    // initialize backend for dealer (deployer)
    ctcDealer.p.Dealer({
        ...User('Dealer'),
        // defines player wager as 5 units of the network token
        wager: stdlib.parseCurrency(5),
        deadline: 10,
    }),
    // initialize backend for player (attacher)
    ctcPlayer.p.Player({
        ...User('Player'),
        // player accepts the wager of the dealer
        acceptWager: async (amt) => {
             console.log(`Player accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

const afterBalanceDealer = await getBalance(accDealer);
const afterBalancePlayer = await getBalance(accPlayer);
// print the changes in balances
console.log(`Dealer went from ${parseInt(beforeBalanceDealer)} to ${afterBalanceDealer}.`);
console.log(`Player went from ${beforeBalancePlayer} to ${afterBalancePlayer}.`);