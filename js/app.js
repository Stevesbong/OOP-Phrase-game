const game = new Game();


/**
 * When clicked the start game button, startGame method in Game class will called
 */
document.getElementById('btn__reset').addEventListener('click', () => {

    game.startGame();

})

/**
 * When clicked keyboard letter, handleInteraction method in Game class will called
 */
document.getElementById('qwerty').addEventListener('click', e => {

    if(e.target.tagName === 'BUTTON') {

        game.handleInteraction(e.target.textContent);

    }
})

/**
 * Listening for keyboard key press and call handleInteraction method
 */
document.addEventListener('keyup', e => {

    game.handleInteraction(e.key);

})
