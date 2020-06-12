class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay(){

        // TARGET UL ELEMENT IN THE PHRASE DIV
        const phraseUl = document.getElementById('phrase').firstElementChild;
        for( let i = 0; i < this.phrase.length; i++) {

            const li = document.createElement('li');

            // IF LETTER IS NOT SPACE, GIVE CLASS NAME LETTER OR SPACE FOR LETTER SPACE
            if(this.phrase[i] !== " ") {
                li.textContent = this.phrase[i];
                li.className = "letter";
                phraseUl.appendChild(li);
            } else {
                li.textContent = this.phrase[i];
                li.className = "space";
                phraseUl.appendChild(li);
            }
        }
    }

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - Letter to check
     */
    checkLetter(letter) {

        // INDEXOF METHOD RETURNS INDEX NUMBER IF LETTER FOUND  OTHERWISE RETURN -1
        if(this.phrase.indexOf(letter) !== -1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - Letter to display
     */
    showMatchedLetter(letter) {
        
        // LOOP THROUGH PHRASE AND IF MATCHES WITH LETTER, ADD CLASS NAME SHOW
        document.querySelectorAll('.letter').forEach( e => {
            if(e.textContent === letter) {
                e.classList.add("show");
            }
        })
    }
}