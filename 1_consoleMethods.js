/*
1. The console.log method is used to write messages to the web console. Using the console.log method, we can write string or value of JavaScript objects to the console.
2. The console.info method is used to display messages in the browser console. Console.info is used by developers for permanent messages in the console. 
The main difference between console.log and console.info is that console.log can also take variables and objects, but console.info can only be used for permanent messages.
3. Console.warn is used to print warning messages in the browser console. We can also print JavaScript objects using the console.warn.
4. Console.error is used to write error messages in the browser console. This can be used during development scenarios, where the developer is sure that it’s bound to an error in certain cases, so the error message can be consoled in console.error.
5. Console.assert is used for condition-based message printing in the console. If we want to print something in the console based on condition, we use the console.assert method.
6. Console.count method is used to print the number of times a function is called in the console.
7. Console.countReset is used to reset the counter used in the console so that we can use the console.count with the same label again.
8. To track the time of how long the operation takes to operate, we use the console.time method. 
9. console.timeLog method takes the current time log and displays it in the console. We can see that in the above example, console.timeLog prints the current timestamp.
10. console.timeEnd method is used to conclude the console.time function and prints the time taken to execute the code blocks from the console.time function.
11. In cases where we need to group a console, we can use the console.group() method. Such scenarios may occur when we need a better understanding of which group the console belongs to. In such cases, we may need to use console.group. The console.group starts grouping of the console.
12. console.groupEnd commands being used simultaneously with the console.group function. It is quite obvious from the name and from the example that console.groupEnd is used to denote the end of a console.group function.
13. Sometimes, to make it more clear, we may need to console in the form of a table. In such cases, we use console.table. We pass the arguments in the console as dictionaries and get the console in the form of a table.
14. The Console.clear function is used to clear the console of the browser. This function is useful during the loading of the web page to clear the console from the previous consoles in the webpage.

 */
console.log("JavaScript Learning");
console.info("info_message");
console.warn("Voice is Echoing");
console.error("Video is buffering");
console.assert(document.getElementById("id"), "No element found with ID 'id'");
