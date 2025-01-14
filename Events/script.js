btn=document.querySelector("#btn");
console.log(btn.getAttribute("class"));

btn.onclick=(e)=>{
    console.log("Accessed via js");
    console.log(e.type);    
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);  
};

btn.addEventListener("click", ()=>{
    console.log("handler 1");    
});
btn.addEventListener("click", ()=>{
    console.log("handler 2");    
});
let handler3= ()=>{
    console.log("handler 3");    
};
btn.addEventListener("click",handler3);
btn.addEventListener("click", ()=>{
    console.log("handler 4");    
});
btn.removeEventListener("click", handler3);