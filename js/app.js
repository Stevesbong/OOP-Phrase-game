/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase('Life is like a box of chocolates');
const game = new Game();



game.phrases.forEach( (phrase, index) => {
    console.log(`Phrase ${index} - phrases: ${phrase.phrase}`);
})