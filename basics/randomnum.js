//math.random()

//Generate a decimal number between 0 and 0.99

//Math.random();

//Save to a variable
//var decimal = Math.random();

//log the value of decimal to the console
//console.log(decimal);

//log the value of decimal MULTIPLIED BY 10 to get a number greated than 1.
//console.log(decimal * 10);

//Get random decimal number between 0 and 0.99.
//Will be greater than 1 because multiplied by 10.
var decimal = Math.random() * 10;

//round up the value of decimal
var rounded = Math.ceil(decimal);

console.log(rounded)