console.log("JavaScript Logical Operators");

//Arithmetic operators
let myNum1 = 10;
let myNum2 = 20;
console.log(myNum1 + myNum2); //30

let myNum3 = "20";
console.log(myNum1 + myNum3); //1020
console.log(myNum1 + Number(myNum3)); //30

let myNum4 = "20A";
//When ever converting String to Number use isNaN
if (isNaN(myNum4)) {
  console.log("myNum4 is not a number thus conversion is not possible");
} else {
  myNum4 = Number(myNum4);
}

let mySub1 = "30";
let mySub2 = 10;
console.log(mySub1 - mySub2); //20 internally JS converts string 30 to Number because '-' we can do only subtraction
console.log(mySub1 + mySub2); //3010
console.log(mySub1 * mySub2); //300
console.log(mySub1 / mySub2); //3

//Assignment Operator "="
let myNumber = 50;
myNumber = 60;

//comparison Operators "==" / "===" / >, <, >=, <=, !=
// '==' only check for value
// '===' check for value and data type
let myNumber1 = 10;
let myNumber2 = 10;
let myNumber3 = "10";

console.log(myNumber1 == myNumber2 ? "true" : "false"); //true
console.log(myNumber1 === myNumber2 ? "true" : "false"); //true

console.log(myNumber1 == myNumber3 ? "true" : "false"); //true
console.log(myNumber1 === myNumber3 ? "true" : "false"); //false

//JS is case-sensitive hence it will return as false
console.log("varma" == "Varma"); //false
console.log("varma" === "Varma"); //false

//logical operators (&&, ||, !)
console.log(true && false); //false
console.log(true && true); //true
console.log(true || false); //true

let myString1 = "Akki";
let myString2 = "Aashi";
//when comparing Strings using logical operator it will return last operand
console.log(myString1 && myString2); //Aashi
console.log(myString1 || myString2); //Akki

let isSalaryCredited = false;
//this is also called as toggle
console.log(!isSalaryCredited); // true

//ternary operator
let age = 21;
let output = age < 18 ? "Too Young" : "Old Enough";
console.log(output); //Old Enough

//null vs undefined
let myNullVariable = null;
let myUndefinedVariable;
console.log(typeof myNullVariable); //object
console.log(typeof myUndefinedVariable); //undefined
//both are emptying the value in JS
console.log(myNullVariable == myUndefinedVariable); //true
console.log(myNullVariable === myUndefinedVariable); //false
