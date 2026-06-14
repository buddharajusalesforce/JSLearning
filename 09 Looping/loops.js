console.log("Java Script Loops");
let myCarsArray = ["Audi", "BMW", "Maruti", "Hyndia", "TATA"];

//traditional for loop for(initialization, condition, increment/decrement)
for (let i = 0; i < myCarsArray.length; i++) {
  console.log(`For Traditional Loop: ${i + 1}. ${myCarsArray[i]}`);
}

//while  while(condition)
let currentIndex = 0;
while (currentIndex < myCarsArray.length) {
  console.log(`While Loop: ${currentIndex + 1}. ${myCarsArray[currentIndex]}`);
  currentIndex++;
}

//do while
/*
do {
    loop will execute at-least once
}while{

} 
*/
do {
  console.log("Do while loop");
} while (1 === 2);

//for of loop
/* 
for(let currItem of collection)
*/
for (let currItem of myCarsArray) {
  console.log(`for of loop: ${currItem}`); //for of get values
}

//to get the index in for of loop use entries on collection

for (let [index, car] of myCarsArray.entries()) {
  console.log(`${index + 1}. ${car}`);
}

/* to make object iterable we have 3 methods
1) Object.keys -> Keys
2) Object.values -> values
3) Object.entries -> Key value pair
*/
const myDetails = { fname: "varma", lname: "buddharaju", age: 46 };
for (let currItem of Object.keys(myDetails)) {
  console.log(`Current Keys in myDetails Object: ${currItem}`);
  console.log(`${myDetails[currItem]}`);
}

for (let currItem of Object.values(myDetails)) {
  console.log(`Current Value in myDetails Object: ${currItem}`);
}

for (let [index, value] of Object.entries(myDetails)) {
  console.log(`${index}: ${value}`);
}

//for in loop - Array
for (let currItem in myCarsArray) {
  console.log(currItem); // It will get index
}

//for in loop - Object
for (let currIndex in myDetails) {
  console.log(currIndex, myDetails[currIndex]);
}

let openingHours = {
  fri: { open: "10 AM", close: "11 PM" },
  sat: { open: "09 AM", close: "10 PM" },
  sun: { open: "08 AM", close: "09 PM" },
};

for (let currItem in openingHours) {
  console.log(currItem);
  console.log(openingHours[currItem]);
  let { open, close } = openingHours[currItem];
  console.log(open, close);
  console.log(`On ${currItem} office starts at ${open} and closes at ${close}`);
}

for (let [day, { open, close }] of Object.entries(openingHours)) {
  console.log("for of loop");
  console.log(day, open, close);
  console.log(`On ${day} office starts at ${open} and closes at ${close}`);
}
