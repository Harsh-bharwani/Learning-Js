let turn="O"; // X 
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

boxes.forEach((box)=>{
    if(box.getAttribute("id")!=="reset-button"){
        box.addEventListener("click", ()=>{
            winMsg.classList.add("hide");
            if(turn==="O") {
                box.innerText="O";
                turn="X";
            }
            else{
                box.innerText="X"; 
                turn="O";
            }
            box.disabled=true;
            checkWinner();
            total_count++;    
            if(total_count==9){
                drawMsg();
            }
        });
    }
});
function drawMsg(){
    winMsg.innerText=`It's a draw..`;
    winMsg.classList.remove("hide");
    total_count=0;
}
// function checktie(){
//     tie=true;
//     for(box of boxes){
//         if(box.disabled==false){
//             tie=false;
//             break;
//         }
//     }
//     console.log(tie);
//     if(tie) {
//         printWinner("It's a tie..");
//     }
// }
function enable_button(){
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button"){
            box.innerText="";
            box.disabled=false;
        }
    }
}
resetButton.addEventListener("click", ()=>{
    enable_button();
    turn="O";
    winMsg.classList.add("hide");
    total_count=0;
});

function printWinner(arg){
    winMsg.innerText=`Congratulations, winner is ${arg}`;
    winMsg.classList.remove("hide");
    total_count=0;
}
function checkWinner(){
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText== boxes[pattern[1]].innerText && boxes[pattern[1]].innerText== boxes[pattern[2]].innerText ) {
            printWinner(boxes[pattern[0]].innerText);
            enable_button();
            break;
        }
    }
}
console.log(total_count);
