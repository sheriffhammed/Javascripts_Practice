//creating function to get hours for sleep per day in a week
const getSleepHours = (day) => {
  day=day.toLowerCase();
  switch (day){
    case 'monday':
    return 8;
    case 'tuesday':
    return 8;
    case 'wednesday':
    return 8;
    case 'thursday':
    return 8;
    case 'friday':
    return 9;
    case 'saturday':
    return 8;
    case 'sunday':
    return 8;
  }
};
//console.log(getSleepHours('TUESDAY'));

//creating function Actual Sleep Hours
//Commenting out instruction from the project in order to rewrite in other way for extra practice
/*const getActualSleepHours = () =>{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};*/
const getActualSleepHours = () =>{
  return 8 +  8 + 8 + 9 + 8 + 10 + 8;
};
//console.log(getActualSleepHours());

//Creating Function for Ideal Sleeping Hours
//Commenting out instruction from the project in order to rewrite in other way for extra practice
const getIdealSleepHours = (idealHours) => {
  //const idealHours = 8;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());

//Creating function for actual sleeping hours
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours){
    console.log('Wow!!! you got the perfect amount of sleep needed');
  }
  else if (actualSleepHours > idealSleepHours){
    const cal = actualSleepHours - idealSleepHours;
    console.log(`You got more ${cal} hour(s) sleep than needed`);
  }
  else if (actualSleepHours < idealSleepHours){
    const cal = idealSleepHours - actualSleepHours;
    console.log(`You got ${cal} hour(s) less sleep than you needed`);
  }
};
calculateSleepDebt();