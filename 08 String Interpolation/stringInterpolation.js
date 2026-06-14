console.log("String Interpolation");

let myString1 = "My Name is";
let myString2 = "Varma";
let myString3 = "I Stay in";
let myString4 = "Katy";

//traditional way
let myString = myString1 + " " + myString2 + ". " + myString3 + " " + myString4;
console.log("myString", myString);

//string interpolation

let myFinalString = `${myString1} ${myString2}. ${myString3} ${myString4} and my age is ${
  2026 - 1980
}`;
console.log("String Interpolation: ", myFinalString);
