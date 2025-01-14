let btn=document.querySelector("button");
let curMode="light";
let handler=()=>{
    if(curMode=="light"){
        curMode="dark";
        // document.body.style.backgroundColor="black";
        document.body.classList.add("dark");
    }
    else{
        curMode="light";
        // document.body.style.backgroundColor="white";
        document.body.classList.remove("dark");
    }
    
};
btn.addEventListener("click", handler);