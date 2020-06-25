class Game {
    constructor() {
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.missed = 0;
    }


    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        const phrases = [];
        phrases.push(new Phrase('code is fun'));
        phrases.push(new Phrase('team tree house'));
        phrases.push(new Phrase('javascript project'));
        phrases.push(new Phrase('practice all the time'));
        phrases.push(new Phrase('everyday code'));
        
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('.header').style.animation = 'rightToLeft 1s';
        const randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const phrase = document.querySelectorAll('.letter');
        const revealed = document.querySelectorAll('.show');
        if(phrase.length === revealed.length) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const hearts = document.querySelectorAll('.tries');
        this.missed += 1;
        hearts[hearts.length - this.missed].firstElementChild.src = 'images/lostHeart.png';
        hearts[hearts.length - this.missed].firstElementChild.className = 'lostHeart';
        if(this.missed === 5) {
            this.gameOver(false);
        } else if(this.missed < 5 && this.checkForWin()) {
            this.gameOver(true);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');

        if(gameWon) {
            overlay.className = 'win';
            overlay.style.display = 'inherit';
            message.textContent = "You Did it! Great!";
            this.resetGame();
        } else {
            overlay.className = 'lose';
            overlay.style.display = 'inherit';
            message.textContent = "Sorry, you missed all the hearts.";
            this.resetGame();
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param {Button Element TextContent} letter - The clicked letter element
     */
    handleInteraction(letter) {
        document.querySelectorAll('.key').forEach( key => {

            if(key.textContent === letter) {

                if( this.activePhrase.checkLetter(letter) ) {
                    key.className = 'chosen';
                    this.activePhrase.showMatchedLetter(letter);
                    if(this.checkForWin()) {
                        this.gameOver(true);
                    }
                } else {
                    key.className = 'wrong';
                    key.disabled = true;
                    this.removeLife();
                }
            }
        })
        
    }
    /**
     * resets previous game.
     * removes phrase, scoreboard, delete classes from keyboard button,
     * change heart image, and remove image's class
     */
    resetGame() {
        const phraseDiv = document.getElementById('phrase').firstElementChild;
        const qwertyKeys = document.querySelectorAll('.keyrow button');
        const hearts = document.querySelectorAll('.tries');

        phraseDiv.innerHTML = '';
        this.missed = 0;
        qwertyKeys.forEach( button => {
            button.disabled = false;
            button.classList.remove('chosen', 'wrong');
            button.classList.add('key');
        });
        hearts.forEach(e=> {
            e.firstElementChild.src = "images/liveHeart.png";
            e.firstElementChild.classList.remove('lostHeart');
        })
    }
}