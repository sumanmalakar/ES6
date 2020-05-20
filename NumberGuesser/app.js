/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amout of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again!

*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// Ui Element
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.querySelector('#guess-input'),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('click', function(e){
 if(e.target.className === 'play-again'){
   window.location.reload();
 }
})

// Listen for guess
guessBtn.addEventListener('mousedown', function(){
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and${max}`, 'red')
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won!
    gameover(true, `${winningNum} is correct , YOU WIN!`)

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost

      gameover(false, `Game over, you lost. The correct number was ${winningNum}`);

    } else{
      // Game continues - answer wrong!

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = ''

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses letf`, 'red')

    } 
  }

});

// Game over
function gameover(won, msg){
let color;
won === true ? color = 'green': color = 'red';

  // Disable input
  guessInput.disable = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // set message
  setMessage(msg);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';


}

// get Winnig Number
function getRandomNum(min, max){
 return Math.floor(Math.random()*(max-min+1)+min);

}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
