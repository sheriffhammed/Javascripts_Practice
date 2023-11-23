//value assign to kelvin variable
const kelvin = 293;
console.log('Kelvin: ' + kelvin);
let celsius = 273;
//Conversion of kelvin to Celsius
celsius = kelvin - celsius;
console.log('Celsius: ' + celsius);
//Fahrenheit Calculation and round down of the calculation
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degerees Fahrenheit.`)

//Newton Convertion
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degerees Newton.`);
