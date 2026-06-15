console.log("Java Script Function and Arrow Functions");

//function declaration
function calculator(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

//function expression
let calc = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

let funcDecResult = calculator(10, 5);
console.log("funcDecResult", funcDecResult);

let funcExpResult = calc(10, 5);
console.log("funcExpResult", funcExpResult);

/*In Case of function expression if you call the function first and 
declare the function then it will not create an error. This is called hoisting.
*/
//Function declaration doesn't support hoisting, hence we will get error

let calc1Result = calc(10);
console.log(calc1Result); // NaN

/*
Arrow Function is modern way of writing functions
*/
let calc3 = (num1, num2) => {
  if (num2) {
    let sum = num1 + num2;
    return sum;
  } else {
    return num1;
  }
};

let arrowResult = calc(10, 5);
console.log("arrowResult", arrowResult);

let great = (username) => {
  return `${username}, Welcome to learn Arrow Function`;
};
console.log(great("Akki"));

let greatArrowFunction = (userName) => `${userName}, Welcome to learn JS.`;
console.log(greatArrowFunction("Aashika"));

let welcomeMessage = () => "welcome to learn JS";
console.log(welcomeMessage());

/*
callback functions
*/
function welcomeMe(name, callMe) {
  console.log(`Hello ${name}`);
  callMe();
}

function greatMeToo() {
  console.log("welcome to JS Learning");
}

function sayGoodBye() {
  console.log("See you in future sessions");
}

welcomeMe("Satya", greatMeToo);
welcomeMe("Akki", sayGoodBye);
