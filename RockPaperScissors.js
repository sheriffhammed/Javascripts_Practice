//Creation of Function for UserChoice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else {
    return 'You input wrong Input';
  }
};
//console.log(getUserChoice('bomb'));
//Creation Function for Computer Choice
const getComputerChoice = () => {
 randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber){
 case 0:
  return 'rock';
 case 1:
  return 'paper';
case 2:
 return 'scissors';
 }
};
/*console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());*/
//ceration of Function to determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was tie';
  }
  //user Choice rock and computer choice paper
  if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  }
//User Choice Paper and Computer choice either rock or scissors
  if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
 }
  //User choice scissors and computer choice either rock or paper
if (userChoice === 'scissors'){
      if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
 }
if (userChoice === 'bomb'){
  return 'You Won!';
}
}

//Testing determineWinner Function
//determineWinner ('scissors', 'rock');
/*console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); 
*/
//Creating of playGame function where userChoice and computerChoice functions was called
const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(`User Input: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

//Invoking the playGame function
playGame();