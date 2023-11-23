let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age = 18;
if(age > 18 && registeredEarly){
 raceNumber += 1000;
}
if(age > 18 && registeredEarly){
  console.log(`You will race by 9:30 am and your RaceNumber is ${raceNumber}`);
}
else if(age > 18 && !registeredEarly){
console.log(`You will race by 11:00 am and your RaceNumber is ${raceNumber}`);
}
else if(age < 18){
console.log(`You will race by 12:30 pm and your RaceNumber is ${raceNumber}`);
}
else{
  console.log('Please check the Registration Desk');
}

