console.log("Java Script Map Collection");

let myMap = new Map();
console.log("myMap ", myMap, typeof myMap);
myMap.set("1", "Akki");
myMap.set(2, "Aashika");
myMap.set(true, "trainer");
console.log("myMap ", myMap);
//to access values from map
console.log(myMap.get("1")); //Akki
console.log(myMap.get(2)); //Aashika
console.log(myMap.get(true)); //trainer
console.log(myMap.get(5)); //undefined
//to get the size
console.log(myMap.size);

let favPlaces = new Map([
  ["vizag", "beach"],
  ["hyderabad", "charminar"],
  ["delhi", "parliment"],
]);
console.log(favPlaces);

for (let [key, value] of favPlaces) {
  console.log(key, value);
}

for (let currItem of favPlaces.keys()) {
  console.log(currItem);
}

for (let currItem of favPlaces.values()) {
  console.log(currItem);
}
