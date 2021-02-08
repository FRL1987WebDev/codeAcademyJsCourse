let userInput;
let computerInput;

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return "ERROR!";
  }
};

const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 0) {
    return computerInput = 'rock';
  } else if (computerInput === 1) {
     return computerInput = 'paper';
  } else if (computerInput === 2) {
    return computerInput = 'scissors';
  } else {
    return "Error with input!"
  }
}

function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    return "The match is a draw!"
  } 
  if (userInput === 'bomb') {
    return "You have destroyed the ememy you Win!"
  }
  if (userInput === 'rock') {
    if (computerInput === 'paper') {
      return "You lose!"
    } else {
      return "You won!"
    }
  if (userInput === 'paper') {
    if (computerInput === 'scissors') {
      return "You Lose!"
    } else {
      return "You Lose!"
    }
  if (userInput === 'scissors') {
    if (computerInput === 'rock') {
      return "You lose!"
    } else {
      return "You win!"
    }
  } 
  }
  }
} 

const playGame = () => {
  userInput = getUserChoice('bomb');
  computerInput = getComputerChoice();
  console.log(userInput);
  console.log(computerInput);
  console.log(determineWinner(userInput, computerInput));
}

playGame()