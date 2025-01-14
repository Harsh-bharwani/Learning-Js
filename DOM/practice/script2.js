// Q1
let b=document.createElement("button");
b.style.backgroundColor="red";
b.style.color="white";
b.textContent="Click me";
document.body.prepend(b);


// Q2

let para=document.querySelector(".content");
console.log(para.getAttribute("class"));
para.classList.add("newClass"); // Add new class name "newClass"
// para.classList.remove("newClass");
// console.log(para.getAttribute("class"));

console.log(para.classList) 
para.classList.remove("newClass"); // remove the newClass from class list

console.log(para.classList)
