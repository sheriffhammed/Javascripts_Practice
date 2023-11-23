let userName = 'Sheriff';
userName === '' ? console.log('Hello') : console.log(`Hello, ${userName}!`);
const userQuestion = 'What are the Magic Eight Ball phrases ?';
console.log(`The Username with ${userName} asked ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
console.log(`The Magic Ball Phrases Random Number genearated is: ${randomNumber}`);
let eightBall = '0';
switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  console.log(`The Magic Phrases for 0 is: ${eightBall}`);
  break;
  case 1:
  eightBall = 'It is decidedly so';
  console.log(`The Magic Phrases for 1 is: ${eightBall}`);
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  console.log(`The Magic Phrases for 2 is: ${eightBall}`);
  break;
  case 3:
  eightBall = 'Cannot predict now';
  console.log(`The Magic Phrases for 3 is: ${eightBall}`);
  break;
  case 4:
  eightBall = 'Do not count on it';
  console.log(`The Magic Phrases for 4 is: ${eightBall}`);
  break;
  case 5:
  eightBall = 'My sources say no';
  console.log(`The Magic Phrases for 5 is: ${eightBall}`);
  break;
  case 6:
  eightBall = 'Outlook not so good';
  console.log(`The Magic Phrases for 6 is: ${eightBall}`);
  break;
   case 7:
  eightBall = 'Signs point to yes';
  console.log(`The Magic Phrases for 7 is: ${eightBall}`);
  break;
  
}
