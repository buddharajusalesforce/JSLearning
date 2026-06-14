console.log("Java Script Spread Operator");
let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];
console.log("numberOne: ", numberOne);
console.log("numberTwo: ", numberTwo);
//concatenation of arrays
let combinedArray = [...numberOne, ...numberTwo];
console.log("combinedArray: ", combinedArray);

//expand the string
let myName = "My Name is Aashika";
console.log("myName", myName);
console.log(...myName); //splits each character and adds space in between

//Add elements in Array
numberOne = [...numberOne, 10, 11, 12];
console.log("numberOne: ", numberOne);

numberTwo = [14, 15, 16, ...numberTwo];
console.log("numberTwo: ", numberTwo);

let numberThree = [11, 12, 13];
numberThree = [1, 2, 3, ...numberThree, 21, 22, 23];
console.log("numberThree: ", numberThree);

//Adding the object
let myObj1 = { fname: "Akki", age: 14 };
let myObj2 = { lname: "Buddharaju", country: "India" };
let finalObj = { ...myObj1, ...myObj2 };
console.log(finalObj);

//copy of an array and object
let myFavFruits = ["Apple", "Banana", "Grapes"];
let myFavFruitsCopy = myFavFruits;
console.log(myFavFruits);
console.log(myFavFruitsCopy);
myFavFruitsCopy.push("cherry");
console.log(myFavFruitsCopy);
//original array also impacted - this is called Deep Copy
console.log(myFavFruits);

let myFruits = ["Apple", "Banana", "Grapes"];
let myFruitsCopy = [...myFruits];
console.log("myFruitsCopy", myFruitsCopy);
console.log(myFruits);
//By using spread operator copy is called Shallow copy it wont touch original array
myFruitsCopy.push("Cherry");
console.log("myFruitsCopy", myFruitsCopy);
console.log(myFruits);

const myDetails = { fname: "Akki", lname: "Buddharaju" };
let myDetailsCopy = { ...myDetails };
console.log("myDetails", myDetails);
console.log("myDetailsCopy", myDetailsCopy);

myDetailsCopy.age = 15;
console.log("myDetails", myDetails);
console.log("myDetailsCopy", myDetailsCopy);
