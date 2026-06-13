# Java Script
JS Overview
•	JavaScript is a scripting case sensitive language for creating dynamic web page content.
•	JavaScript is the default scripting language in HTML. 
 

External JS
•	JavaScript file have the file extension .js
•	To use external script, put the name of the file in the src (source) attribute of a <script> tag:

 

JS Console
•	The console is the tool where you can test or check your code is working properly or not.
•	It can be used to access the browser to troubleshoot the errors related to your code.
•	Remember a console is an object that can access methods like log() using the dot(.) operator.
•	Different console methods blog post link: https://www.cybrosys.com/blog/what-are-the-console-methods-in-javascript
 
 

JS Variables
•	Variables are the containers to store values.
•	JS variables must be identified with unique names. These unique names are called identifiers.
•	var, const and let are keywords to declare variable.
•	A variable declared without a value will have the value undefined.
Keyword	Let	Const	Var
Global Scope	N	N	Y
Functional Scope	Y	Y	Y
Block Scope	Y	Y	N
Can be reassigned	Y	N	Y
Can be redeclared	N	N	Y

When to Use var, let, or const?
•	Always use const if the value should not be changed.
•	Always use const if the type should not be changed (Arrays and Objects)
•	Only use let if you can’t use const.
•	Only use var if you MUST support old browsers.


JS Data Types
•	A JS variable can hold any type of data.
•	JS has dynamic types. This means that the same variable can be used to hold different data types.
•	You can use the JS typeOf operator to find the type of a JS variable.
•	When adding a number and a string, JS will treat number as a string.
•	JS evaluates expression from left to right. Different sequences can produce different results:
o	X = 16 + 4 + “Volvo” -> 20Volvo
o	X= “Volvo” + 16 + 4 -> Volvo164

Data Type	Description
String	Represents textual data e.g. “Hello” 
Number	An integer or a floating-point number e.g. 100
Boolean	Any of 2 values: true or false
Undefined	A data type whose variable is not initialized
Null	Represents null i.e. no value at all
Object	Key-value pairs of collection of data
Array	Represents group of values

JS Truthy & Falsy
A truthy value is a value that is considered true when encountered in a Boolean context. A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

Value	Type	Description
null	Null	The keyword null – the absence of any value
Undefined	Undefined	Undefined – the primitive value.
False	Boolean	The keyword false.
NaN	Number	NaN – Not a number
0	Number	The Numeric zero, also including 0.0, 0*0, etc…
-0	Number	The Numeric negative zero, also including -0.0, -0*0, etc…
On	Biginit	The Boginit zero, also including 
--	String	Empty string value, also including “” and ‘’
Document.all	Object	The only fasly object in JS is the built-in document.all

JS Operators
Operators	Description
Arithmetic	Operate upon the numerical values and a numerical value (+, -, *, /)
Assignment	Evaluates the assigned value (=)
Comparison	Determine the equality or difference between the values (==, ===, !=, !==, >, <, >=, <=)
Logical	Determine the Logic between variables
Logical AND (&&): It checks whether 2 operands are non-zero, if yes then return the last operand.
Logical OR (||): It checks whether 2 operands are non-zero, if yes then returns the first operand.
Logical NOT (!): It reverses the Boolean result of the operand (or condition)
Note – 0, false, undefined, null, or, “” is considered as zero
Ternary	Conditional operator that assigns a value to a variable based on some condition variableName = (condition) ? value1 : value2

JS Equality (==) vs Strict Equality (===)
Equality (==)	Strict Equality (===)
Equality operator is used to compare the values of the operand.	JS strict equality operator is used to compare 2 operands and return true id both the value and type of operands are the same.
It is also called a loose equality check as the operate performs a type conversion when comparing the elements.	Since type conversion is not done, so even if the stored in operands is the same but their type is different the operation will return false.
When the comparison of objects is done then only their reference is checked even if both objects contain the same value.	

JS Null vs Undefined
When we define a variable to undefined then we are trying to convey that the variables does not exist. When we define a variable to null then we are trying to convey that the variable is empty. 
Null	Undefined
It is the intentional absence of the value. It is one of the primitive values of JS.	It means the value does not exist in the compiler.
Type: Object	Type: undefined

JS Object
•	Object values are written as name: value pairs (name and value separated by a colon).
•	An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and the value can be anything.
•	You can create a JS object from a JSON object literal JSON.parse(myJSON) and Object into string by JSON.Stringify (myObj)
•	You can access object values by using (.) notation and access object values by using bracket ([]) notation.
•	You can also loop through object properties with a for-in loop.

JS Spread Operator
JS spread operator (…) allows us to quickly copy all or part of an existing array or object into another array or object.

The operator shape is three consecutive dots and is written as: …

Usages of Spread Operator
•	Expanding String
•	Combining Arrays
•	Combining Object
•	Creating new shallow copy of Array and Object
JS De-structuring Assignment
De-structuring Assignment is a JS expression that allows to unpack values from arrays, or properties from objects, into distinct variables.

Data can be extracted from arrays, objects, nested objects and assigning to variables. De-structuring makes it easy to extract only what is needed.
•	When de-structuring arrays, the order that variables are declared is important.
•	Object properties do not have to be declared in a specific order.

JS String Interpolation
•	Template literals use back-ticks ( ``) rather than the quotes (“”) to define a string.
•	With template literals, you can use both single and double quotes inside a string.
•	Template literals allows multiline strings.
•	Template literals provide an easy way to interpolate variable and expression into strings. The method is called string interpolation. The syntax is ${…}
•	Template literals allow expressions in strings.
 
JS Looping
If you want to run same code over and over again, each time with a different value.
JS supports different kinds of loops:
•	for - loops through a block of code a number of times
•	for/in - loops through the properties of an object
•	for/of - loops through the values of an iterable object
•	while - loops block of code while a specified condition is true
•	do/while - also loops block of code while a specified condition is true. 
The break statement “jumps out” of a loop.
The continue statement “jumps over” one iteration in the loop.

JS Map Collection
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:
•	new Map() - creates the map.
•	map.set (key, value) - stores the value by the key.
•	map.get (key) - returns the value by the key, undefined if key doesn’t exists in map.
•	map.has(key) - returns true if the key exists, false otherwise.
•	map.delete (key) - removes the element (the key/value pair) by key.
•	map.clear() - removes everything from the map.
•	map.size - returns the current element count. 

JS Set Collection
Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.

Methods and properties are:
•	new Set() - creates a new Set.
•	add() - Adds a new element to the Set.
•	delete() - Removes an element from a Set.
•	has() - Returns true if a value exists.
•	clear() - Removes all elements from a Set

JS Function Declaration and Expression
JS functions are defined with the function keyword. You can use a function declaration or a function expression.

Parameter Rules
•	JS function definitions do not specify data types for parameters.
•	JS functions do not perform type checking on the passed arguments.
•	JS functions do not check the number of arguments received.
•	ES6 allows function parameters to have default values.

JS Arrow Functions
Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.

If the function has only one statement, and the statement return a value you can remove the brackets and the return keyword.
 

JS Callback Functions
A callback is a function passed as an argument to another function.

The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function.

JS String and String Methods
JS strings are for storing and manipulating text.
•	String length
•	String slice()
•	String substring()
•	String substr()
•	String replace()
•	String replaceAll()
•	String toUpperCase()
•	String indexOf()
•	String lastIndexOf()
•	String includes()
•	String toLowerCase()
•	String contact()
•	String trim()
•	String trimStart()
•	String trimEnd()
•	String padStart()
•	String padEnd ()
•	String charAt ()
•	String charCodeAt()
•	String split()

JS Array and Array Methods
An array is a special variable, which can hold more than one value.
•	length
•	toString()
•	pop ()
•	push ()
•	shift ()
•	unshift ()
•	concat ()
•	splice ()
•	slice ()
•	indexOf
•	lastIndexOf
•	includes ()
•	forEach ()
•	map ()
•	filter ()
•	reduce ()
•	find ()
•	every ()
•	some ()
<img width="504" height="598" alt="image" src="https://github.com/user-attachments/assets/41f65e44-219d-4bfb-afe0-60ce28782391" />
