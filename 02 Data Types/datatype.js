console.log("Java Script Data Types");

let myName = "Akshith";
console.log("myName: ", myName); //Akshith
console.log("typeof myName: ", typeof myName); //string

myName = 10;
console.log("myName: ", myName); //10
console.log("typeof myName: ", typeof myName); //number

myName = true;
console.log("myName: ", myName); //true
console.log("typeof myName: ", typeof myName); //boolean

let myDetails = { fname: "Akshith", lname: "Buddharaju" };
console.log("myDetails: ", myDetails); // {fname: 'Akshith', lname: 'Buddharaju'}
console.log("typeof myDetails: ", typeof myDetails); //object

let myArray = [];
console.log("myArray", myArray); //[]
console.log("typeof myArray", typeof myArray); //object

let myNullVariable = null;
console.log("myNullVariable", myNullVariable); // null
console.log("typeof myNullVariable", typeof myNullVariable); //object

let myVariable;
console.log("myVariable", myVariable); // undefined
console.log("typeof myVariable", typeof myVariable); //undefined

let myNull = "";
console.log("myNull", myNull); //
console.log("typeof myNull", typeof myNull); //string

//JS evalutes from left to right
let expression = 16 + 4 + "Volvo";
console.log(expression); // 20Volvo

let exp1 = "Volvo" + 16 + 4;
console.log(exp1); //Volvo164

let myNumber = "1";
console.log("myNumber", myNumber); //1
console.log("typeof myNumber", typeof myNumber); //string

let myNum1 = "1" + "5";
let myNum2 = "1" + 5;
let myNum3 = "5" + 1;

console.log("myNum1", myNum1); //15
console.log("typeof myNum1", typeof myNum1); //string

console.log("myNum2", myNum2); //15
console.log("typeof myNum2", typeof myNum2); //string

console.log("myNum3", myNum3); //51
console.log("typeof myNum3", typeof myNum3); //string
