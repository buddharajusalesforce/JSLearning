console.log("Java Script Destructuring");
let myFavFruits = ["Apple", "Banana", "Cherry"];
//traditional way of getting values from Array
console.log(myFavFruits[0]);

//destructuring
let [myFavFruit1, myFavFruit2, myFavFruit3] = myFavFruits;
console.log(myFavFruit1);
console.log(myFavFruit2);
console.log(myFavFruit3);

//extract only 1st and last element in myFavFruit array
let [myFavFruitApple, , myFavFruitCherry] = myFavFruits;
console.log(myFavFruitApple);
console.log(myFavFruitCherry);

let myFruit = ["Apple", "Cheery", "Banana", "Guava"];
let [myFruit1, myFruit2, ...rest] = myFruit;
console.log(myFruit1);
console.log(myFruit2);
console.log(rest);

let myDetails = { fname: "Aashi", lname: "buddharaju", year: 2017 };
let { fname, lname, year } = myDetails;
console.log(fname);
console.log(lname);
console.log(year);
//To give Alias Name
let { fname: firstName, year: Year } = myDetails;
console.log(firstName);
console.log(Year);
