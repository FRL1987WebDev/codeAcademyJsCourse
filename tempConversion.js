//this is the temperature in kelvin today
const kelvin = 0;

//conversion from kevin to celsius
let celsius = kelvin - 273;

//the equation for fahrenheit
fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)