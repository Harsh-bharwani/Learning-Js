let turn=document.querySelector("#turn"); // X 
let turn_container=document.querySelector(".turn-container");
let boxes=document.querySelectorAll("button");
let resetButton=document.querySelector("#reset-button");
// let newGame=document.querySelector("#new-game-button");
let winMsg=document.querySelector(".msg-container");
let total_count=0;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let game=document.querySelector(".game");
game.addEventListener("click", (e)=>{
    let box=e.target;   
    if(total_count==0) {
        enable_button();
    }
    if(box.getAttribute("class")!="game"){      
            if(turn.innerText==="O") {
                box.innerText="O";
                turn.innerText="X";                
            }
            else{
                box.innerText="X"; 
                turn.innerText="O";
            }
            box.disabled=true;
            checkWinner();
            total_count++;    
            if(total_count==9){
                drawMsg();   
            };
    };
});
    
function drawMsg(){
    winMsg.innerText=`It's a draw.. 🤝`;
    total_count=0;
    disable_button();
    printResetMsg();
}
function printResetMsg(){
    turn_container.classList.add("print-reset-msg");
    turn_container.innerHTML="<marquee scrollamount='10' direction='left'>Please Reset the game!</marquee>";
    turn_container.classList.add("print-reset-msg");
}
function enable_button(){
    turn.innerText="O";
    winMsg.classList.add("hide");
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button"){
            box.innerText="";
            box.disabled=false;
        }
    }
}
function disable_button(){
    turn.innerText="O";
    winMsg.classList.remove("hide");
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button"){
            box.disabled=true;
        }
    }
}
resetButton.addEventListener("click", ()=>{
    enable_button();
    winMsg.classList.add("hide");
    total_count=0;
    turn_container.classList.remove("print-reset-msg");
    turn_container.innerHTML="<span>Turn: </span><div id='turn'>O</div>"
});

function printWinner(arg){
    winMsg.innerText=`Congratulations, winner is ${arg} 🏆`;
    winMsg.classList.remove("hide");
    total_count=0;
    disable_button();
    printResetMsg()
}
function checkWinner(){
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText== boxes[pattern[1]].innerText && boxes[pattern[1]].innerText== boxes[pattern[2]].innerText ) {
            printWinner(boxes[pattern[0]].innerText);
            break;
        }
    }
}
console.log(total_count);
