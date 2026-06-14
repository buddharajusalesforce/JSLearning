console.log("Java Script Object Demo");

const myDetails = {
  fName: "Akki",
  lName: "Buddharaju",
  age: 14,
  skills: ["Admin", "Apex", "LWC", "JS"],
};
//object sequence doesn't matter
console.log("myDetails", myDetails);
console.log("typeof myDetails", typeof myDetails); //object

//JSON.stringify : object into string
let jsonString = JSON.stringify(myDetails);
console.log("jsonString", jsonString);
console.log("typeof jsonString", typeof jsonString); //string

//JSON.parse : convert string into Object
const jsonObject = JSON.parse(jsonString);
console.log("jsonObject", jsonObject);
console.log("typeof jsonObject", typeof jsonObject); //object

//modify object - using . notation or [] bracket
myDetails.day = "2011";
//if property is not available it will add the property
console.log("myDetails", myDetails);

myDetails.age = 2026 - myDetails.day;
//if property exists then it will update the property
console.log("myDetails", myDetails);

myCountry = "Country";
myDetails[myCountry] = "India";
console.log("myDetails", myDetails);
myDetails["City Name"] = "Vizag";
console.log("myDetails", myDetails);

//Access the value from object - . or []
console.log("My Age: ", myDetails.age);
console.log("My City: ", myDetails["City Name"]);
