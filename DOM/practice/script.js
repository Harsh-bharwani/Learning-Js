let oldText=document.querySelector("h2").innerText;
let newText=oldText+" from Apna college"
document.querySelector("h2").innerText=newText;


let boxes=document.querySelectorAll(".box");
let id=1;
for(let box of boxes){
    box.innerText=`new value is ${id}`;
    id++;
}

let div=document.querySelector("div");
let idx=div.getAttribute("id");
let div2=document.getElementById(idx);
div.setAttribute("id", 5);
div2.setAttribute("id", 3); 

let b=document.createElement("button");
b.textContent="click me";
b.style.backgroundColor="blue";
b.style.color="white";
b.style.margin="5px";

div.append(b); // Insert at start
div.prepend(b); // Insert at end
div.before(b); // Add before div
div.after(b); // Add after the div

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>I am new, but the best</i>"

document.body.prepend(newHeading);
// or
document.querySelector("body").prepend(newHeading);
