console.log("Java Script String and String Methods");
let myDetails = "My Name is Varma";

//lenght of String
console.log("My String length: ", myDetails.length);

/*
extracting the string
    slice (startPosition, endPosition+1) -> end is not included
        we can slice from the end as well using negative numbers.
    substring(start, end) -> If you pass negative value in positions it will be treated as 0
    substr(startPosition, length)
*/
let text = "Apple, Banana, Kiwi";
//extract Banana
console.log("slice Banana", text.slice(7, 13)); //Banana
console.log(text.slice(7)); //Banana, Kiwi
console.log(text.slice(-4)); //Kiwi
console.log(text.slice(-12)); //Banana, Kiwi

//substring
let substringBanana = text.substring(7, 13);
console.log(substringBanana); //Banana
console.log(text.substring(-1)); //Apple, Banana, Kiwi pass any negative no then it will fetch complete string

//substr
console.log(text.substr(7, 6)); //Banana

//replace method - replace String with some other string
//replace will only replace the 1st match
//replace also case sensitive
//replace will not replace original string
let replaceString = text.replace("Banana", "Mango");
console.log(replaceString); //Apple, Mango, Kiwi
console.log(text); //Apple, Banana, Kiwi

let text1 = "Apple, Banana, Kiwi Banana";
let replaceText = text1.replace("Banana", "Mango");
console.log(replaceText); //Apple, Mango, Kiwi Banana

console.log(myDetails); //My Name is Varma
console.log(myDetails.toUpperCase()); //MY NAME IS VARMA
console.log(myDetails.toLowerCase()); //my name is varma

//concat
let text2 = "Hello";
let text3 = "JS";
console.log(`${text2} ${text3}`); //Hello JS
console.log(text2.concat(" ", "World")); //Hello World

//trim(), trimStart(), trimEnd()
let trimMe = "     Hello World     ";
console.log(trimMe.trim()); //Hello World
console.log(trimMe.trimStart()); //Hello World
console.log(trimMe.trimEnd()); //     Hello World
