// ? Display an alert box
// alert("hello");

// ! Logs to the console
// window.console.log("harsh"); // Because window is a global object, I can access any function with the help of it (if permission is granted).

// * Display all properties and methods of the window object
console.dir(window);

// * Log the complete document object of the webpage
console.log(document); // Equivalent to console.log(window.document) since the browser already knows about the document object.

// ! Accessing body directly throws an error
// console.log(body); // ❌ Error: Unknown identifier because the browser doesn't recognize "body" directly.

// ? Correct way to access body
console.log(document.body); // ✅ Logs the code of the <body> section.

// * Object Example
const student = {
  username: "harsh",
  age: 20,
  reading: () => {
    console.log("I am reading");
  },
};

// ? Display the student object
console.log(student); // Print in the form of an object.
console.dir(student); // Print all its properties and methods.

// * Accessing child nodes dynamically
console.log(document.body.childNodes[1]); // Access the second child node of the <body>.

// ! Dynamically modify the webpage
document.body.style.background = "pink"; // ✅ Changes the background color of the webpage to pink.

// ? If the JS file is linked before <body>, document.body will be null!
// console.log(document.body); // ❌ Null if the script is loaded before the body is rendered.

// * DOM Manipulation
let headings = document.getElementsByClassName("heading-class");
console.log(headings); // Logs the collection of elements with the class "heading-class".
console.dir(headings); // Logs properties and methods of the collection.

// * Note:
// - If you access an ID that doesn't exist, document.getElementById returns **null**.
// - If you access a class that doesn't exist, document.getElementsByClassName returns an **empty collection** (similar to an array).

// ? Query Selector Ex
