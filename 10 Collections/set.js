console.log("Java Script Set Collection");
let mySet = new Set();
console.log("mySet", mySet);

mySet.add("Cheese");
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Sandwitch");
mySet.add("Pizza");
console.log("mySet", mySet); //duplicate pizza element will not be there

console.log(mySet.has("Pizza")); //true
console.log(mySet.has("Ghar ka Khana")); //false

mySet.delete("Cheese");
console.log("mySet", mySet);

let myFavCities = new Set(["Vizag", "Hyderabad", "Vizianagaram"]);
console.log("myFavCities", myFavCities);

for (let currItem of myFavCities) {
  console.log(`My fav city: ${currItem}`);
}
