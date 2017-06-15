/* To improve this app:
- instead of user typing in input, user clicks on choice of rock, paper, or scissors
- animation or pic of move appears from both ends of screens
*/

function getUserChoice () {
  var userInput = prompt('Your move: rock, paper or scissors?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error! Please enter the correct input of 'rock', 'paper' or 'scissors'");
  }
}
function getComputerChoice () {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
    default:
      return 'Error';
                      }
}
function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } if (userChoice === 'rock') {
    	if (computerChoice === 'scissors') {
      	return 'You won!';
    } else {
      return 'Computer won!';
    }
  } if (userChoice === 'paper') {
    	if (computerChoice === 'scissors') {
    		return 'Computer won!';
  }		else {
    	return 'You won!';
  }
} if (userChoice === 'scissors') {
  	if (computerChoice === 'rock') {
      return 'Computer won!';
    }	else {
      return 'You won!';
    }
} if (userChoice === 'bomb') {
  	if (computerChoice === 'rock' || 'paper' || 'scissors')
    	return 'You won!';
} else {
  return ('Computer won!')
}
}
function playGame () {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log('The computer threw: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
}
playGame();