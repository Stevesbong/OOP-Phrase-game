/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.phrases = this.createPhrases()
        this.activePhrase = null;
        this.missed = 0;
    }


    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [];
        phrases.push(new Phrase('code is fun'))
        phrases.push(new Phrase('team tree house'))
        phrases.push(new Phrase('javascript project'))
        phrases.push(new Phrase('practice all the time'))
        phrases.push(new Phrase('everyday code'))
        
        return phrases;
    }
}