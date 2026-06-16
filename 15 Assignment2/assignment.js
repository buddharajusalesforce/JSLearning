/*
********Task1*************
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World
*/
const capitalizedFirstLetter = (inputString) =>
  /*let convertedArray = inputString.split(" ");
  let mapArray = convertedArray.map(
    (currItem) => currItem[0].toUpperCase() + currItem.slice(1)
  );
  let finalString = mapArray.join(" ");
  console.log("Converted Array", convertedArray);
  console.log("mapArray", mapArray);
  console.log(finalString);*/
  //smaller version of coding
  inputString
    .split(" ")
    .map((currItem) => currItem[0].toUpperCase() + currItem.slice(1))
    .join(" ");
console.log(capitalizedFirstLetter("Hello world welcome to learn salesforce"));
/*
********Task2*************
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"
*/
const reverseString = (inputString) =>
  inputString.split("").reverse().join(" ");
console.log(reverseString("Hello World"));
/* 
********Task3*************
Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 } 
*/
const charCount = (inputString) => {
  let output = {};
  let inputArray = inputString.split("");
  for (let currItem of inputArray) {
    console.log("currItem", currItem);
    if (output.hasOwnProperty(currItem)) {
      output[currItem] = output[currItem] + 1;
    } else {
      output[currItem] = 1;
    }
  }
  console.log("output", output);
};
charCount("varma");
/*
********Task4*************
Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ 
*/

const generateUserName = (inputString) =>
  inputString
    .toUpperCase() // First Converting given string into upper case
    .split(" ") // Split based on space
    .map((currItem) => currItem[0]) //loop through all item and get 1st character
    .join(""); //join the sting

console.log(generateUserName("ankit Dilipji Jain"));
/*
 ********Task5*************
 Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]
 */

/*
 ********Task6*************
 Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]
 */
const FruitString = (inputString) =>
  inputString.filter((currItem) => currItem.length >= 5);
console.log(FruitString(["apple", "banana", "grape", "orange", "kiwi"]));
/*
 ********Task7*************
 Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
 */

const uniqueNumbers = (inputString) => [...new Set(inputString)];
console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
