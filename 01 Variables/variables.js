/* 
1. var is having Global scope and let/const does not have Global scope.
2. var/let/const all have functional scope.
3. let/const is having block scope and var does not have it.
4. let/var can be re-assigned where as const can't be re-assigned.
5. var can be re-declared where as let/const can't be re-declared.
*/

console.log("Java Script Variables");
/*
    let
    let keyword can be updated
    let keyword cannot be re declared
*/
let myName = "Akshith";
console.log("myName: ", myName);
myName = "Aashika";
console.log("myName: ", myName);

//let myName = "varma"; cannot re-declare let variable

/* 
    const
    const keyword cannot be updated
    const cannot be re declared
*/
const myLastName = "Buddharaju";
console.log("myLastName", myLastName);

//myLastName = "Buddharaju Venkata"; - > uncaught Error : Assignement to constant variable

//In case of object the behaviour is different
const myObject = { firstName: "Aashika", lastName: "Buddharaju" };
console.log(myObject);

//if you modify single property of an object then you will not get error
myObject.firstName = "Akshith";
console.log(myObject);

//When you modify entire object then you will get error.
//myObject = { firstName: "Kishore", lastName: "varma" }; -> Assignment to constant varaible

/*
    var
    var keyword can be re-assigned
    var keyword can be re-declared
    Bad practice to use var
*/

var learning = "JS";
console.log("learning: ", learning);
learning = "LWC"; // re-assignment
console.log("learning: ", learning);

var learning = "redeclared"; // re declaration
console.log("learning: ", learning);

//var keyword is an global variable
//window is an global Object through it we are able to access var global variable
console.log(window.learning);
