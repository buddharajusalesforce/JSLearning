console.log("Java Script Array and Array Methods");
let myCars1 = []; //empty array
console.log("myCars: ", myCars1, "typeOf myCars", typeof myCars1);
let myCars = ["BMW", "Audi", "Ferrari", "Volvo"]; //empty array
console.log("myCars: ", myCars);

//access values in Array
console.log("First element in an Array", myCars[0]); //BMW

//entries in an array
console.log("myCars Length", myCars.length); //4

//add elements in an Array
/*
1. push -> add element in array at end
2. unshift -> add element in array at begin
3. spread operator
*/
myCars.push("Hyndai");
console.log(myCars); //['BMW', 'Audi', 'Ferrari', 'Volvo', 'Hyndai']

myCars.unshift("TATA");
console.log(myCars); //['TATA','BMW', 'Audi', 'Ferrari', 'Volvo', 'Hyndai']

myCars = ["Honda", ...myCars, "Maruti"];
console.log(myCars); //['Honda', 'TATA', 'BMW', 'Audi', 'Ferrari', 'Volvo', 'Hyndai', 'Maruti']

//remove the elements from an Array
//pop -> remove the element from an array in the end, return the removed element
//shift -> remove the element from array from the start
let popItem = myCars.pop(myCars);
console.log(myCars); //['Honda', 'TATA', 'BMW', 'Audi', 'Ferrari', 'Volvo', 'Hyndai']
console.log(popItem); //Maruti

let shiftItem = myCars.shift(myCars);
console.log(myCars); //['TATA', 'BMW', 'Audi', 'Ferrari', 'Volvo', 'Hyndai']
console.log(shiftItem); //Honda

//modify the element in an array
//replace Ferrari with Honda
myCars[3] = "Honda";
console.log(myCars); //['TATA', 'BMW', 'Audi', 'Honda', 'Volvo', 'Hyndai']

/*search element
1. indexOf -> 
2. includes -> 
*/
console.log(myCars.indexOf("Audi")); //2
console.log(myCars.indexOf("xyz")); // -1

console.log(myCars.includes("Audi")); //true
console.log(myCars.includes("XYZ")); // false
/* 
How to convert array into string
1. toString() -> All the array entries will be separated by the comma
2. Join() -> User can decide the separator
*/
console.log(myCars.toString()); //TATA,BMW,Audi,Honda,Volvo,Hyndai
console.log(myCars.join(" ")); // TATA BMW Audi Honda Volvo Hyndai
console.log(myCars.join("$")); // TATA$BMW$Audi$Honda$Volvo$Hyndai

/*
splice
    Is used to add element in array, and also used to remove the element from an array
    splice(param1, param2, rest)
        param1 -> Position where new element will be added
        param2 -> How many elements needs to be removed
        rest -> new elements you have to add
    splice method will return the array of deleted elements
    splice will modify the original array
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Need to add 2 more fruits
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
//remove 2 elements from an array
let removedFruits = fruits.splice(0, 2);
console.log(removedFruits); //['Banana', 'Orange']
console.log(fruits);
["Lemon", "Kiwi", "Apple", "Mango"];
/*
slice
    When ever you need to extract portion of an array.
    Returns new Array and it will not modify original Array
    slice(param1, param2)
        param1 ->Index of starting Argument
        param1 ->Index of end Argument + 1
*/
let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); //['Kiwi', 'Apple']
console.log(fruits); //['Lemon', 'Kiwi', 'Apple', 'Mango']
//extract lemon and Kiwi
console.log(fruits.slice(0, 2)); //['Lemon', 'Kiwi']

/*
iteration of the array
1.forEach ((currItem, index, originalArray)) - parameter as the call back function
2. Map
*/
let bankingTransactions = [5000, -7000, 9000, -4000, 2000];
console.log(bankingTransactions);

//forEach()
bankingTransactions.forEach((currItem, index, array) => {
  console.log(
    `Current Item: ${currItem} at Index ${index} in bankingTransaction array`
  );
});

//map
let updatedArray = bankingTransactions.map((currItem) => {
  return currItem / 10;
});
console.log(updatedArray); //[500, -700, 900, -400, 200]

//get all the deposits
let depositArray = bankingTransactions.filter((currItem) => currItem > 0);
console.log(depositArray); //[5000, 9000, 2000]

let withdrawlArray = bankingTransactions.filter((currItem) => currItem < 0);
console.log(withdrawlArray); //[-7000, -4000]

let myFruits = ["Fig", "Apple", "Guava", "Cherry"];
//give the fruits for which name is greater than 3 characters

let filteredFruits = myFruits.filter((currentItem) => currentItem.length > 3);
console.log(filteredFruits); //['Apple', 'Guava', 'Cherry']

//check if transaction array have 9000 entry
//find -> Always return 1 entry/item
let entryFor9000 = bankingTransactions.find((currItem) => currItem === 9000);
console.log(entryFor9000); //9000

let entryFor90000 = bankingTransactions.find((currItem) => currItem === 90000);
console.log(entryFor90000); //undefined
