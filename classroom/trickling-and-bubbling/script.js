let grandparent= document.querySelector("#grand-parent");
let parent= document.querySelector("#parent");

let child= document.querySelector("#child");
let bubbleMsg=document.querySelector("#bubble-msg");
let captureMsg=document.querySelector("#capture-msg");
let target=document.querySelector(".class")
let container=document.querySelector(".container");

container.addEventListener("click", ()=>{
    bubbleMsg.classList.remove("hide");
    captureMsg.classList.remove("hide");
})

grandparent.addEventListener("click", (e)=>{
    if(bubbleMsg.innerText){
        bubbleMsg.innerText+=`${e.target.getAttribute("id")} -due to grandparent\n`;
    }
    else bubbleMsg.innerText=`${e.target.getAttribute("id")} -due to grandparent\n`;
});
grandparent.addEventListener("click", (e)=>{
    if(captureMsg.innerText){
        captureMsg.innerText+=`${e.target.getAttribute("id")} -due to grandparent\n`;
    }
    else captureMsg.innerText=`${e.target.getAttribute("id")} -due to grandparent\n`;

}, true);
parent.addEventListener("click", (e)=>{
    if(bubbleMsg.innerText){
        bubbleMsg.innerText+=`${e.target.getAttribute("id")} -due to parent\n`;
    }
    else bubbleMsg.innerText=`${e.target.getAttribute("id")} -due to parent\n`;
});
parent.addEventListener("click", (e)=>{
    if(captureMsg.innerText){
        captureMsg.innerText+=`${e.target.getAttribute("id")} -due to parent\n`;
    }
    else captureMsg.innerText=`${e.target.getAttribute("id")} -due to parent\n`;

}, true);
child.addEventListener("click", (e)=>{
    if(bubbleMsg.innerText){
        bubbleMsg.innerText+=`${e.target.getAttribute("id")} -due to child\n`;
    }
    else bubbleMsg.innerText=`${e.target.getAttribute("id")} -due to child\n`;

});
child.addEventListener("click", (e)=>{
    if(captureMsg.innerText){
        captureMsg.innerText+=`${e.target.getAttribute("id")} -due to child\n`;
    }
    else captureMsg.innerText=`${e.target.getAttribute("id")} -due to child\n`;
    
}, true);