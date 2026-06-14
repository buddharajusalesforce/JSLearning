console.log("Truthy and Falsy Demo");

let myName;
console.log(myName); //undefined

if (myName) {
  console.log("print my Name", myName);
} else {
  console.log("myName return undefined hence it is falsy");
}
// o/p -> myName return undefined hence it is falsy

let myFalsy = null;
console.log(myFalsy); //null
if (myFalsy) {
  console.log("print my Falsy", myFalsy);
} else {
  console.log("myFalsy return null hence it is falsy");
}
// o/p -> myFalsy return null hence it is falsy

let mySalary = 0;
console.log(mySalary); //0

if (mySalary) {
  console.log(mySalary);
} else {
  console.log("Value is 0 hence it is falsy");
}
// o/p ->  Value is 0 hence it is falsy
