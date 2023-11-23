//Assigning value to myAge variable
let myAge = 8;
//Assigning value to earlyYears variable
let earlyYears = 2;
earlyYears *= 10.5;
//Assigning value to laterYears variable
let laterYears = myAge - 2;
//Using Multiplication assignment operator to multiply laterYears value by 4
laterYears *= 4;
console.log('Early Years: ' + earlyYears);
console.log('Later Years: ' + laterYears);
//Adding Early and Later year together
let myAgeInDogYears = earlyYears + laterYears;
//changing variable myName value to lower case
let myName = 'SHERIFF'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);