// 2.1

let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val1);
console.log(typeof val2);
console.log(typeof myNum);

// 2.2

let name = "Mariam";
let age = "18";
let canCodeOrNot = true;
console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${canCodeOrNot}`);

// 2.3

let a = +prompt("Enter the value of a");
let b = +prompt("Enter the value of b");
let ans = ( a*a + b*b );
let finalAns =  ("c =" + Math.sqrt(ans));
console.log(finalAns);

// 2.4

let a2 = 10;
let b2 = 12;
let c2 = 14;

console.log(b2 + a2);
console.log(a2 / c2);
c2 = (c2 % b2);
console.log(c2);
console.log(a2,b2,c2);

// CHAPTER PROJECT

let miles = prompt("Enter Miles");
console.log(`The distance of ${miles} miles is equal to ` + miles*1.60934 + " kms" );

let heightInInches = 90;
let weightInPounds = 200;
let heightInCentimeters = heightInInches * 2.54;
heightInMeters = heightInCentimeters*0.01;
let weightInKilos =  weightInPounds * 0.453592;
console.log("Height in centimeters = ", heightInCentimeters);
console.log("Weight in kilos = ", weightInKilos);
console.log("BMI:", weightInKilos / (heightInMeters*heightInMeters))

