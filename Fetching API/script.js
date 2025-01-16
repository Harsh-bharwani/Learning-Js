let fact=document.querySelector("#fact");
let btn=document.querySelector("#btn");

btn.addEventListener("click", getCatData);

// async function getCatData(){
//     let response=await fetch("https://cat-fact.herokuapp.com/facts"); // await because it will get data from other place
//     console.log(response);  // In Json Format
//     let data=await response.json(); // convert json format to js understandable format
//     fact.innerText=data[0].text;
// }


// By Promise Chaining

function getCatData(){
    fetch("https://cat-fact.herokuapp.com/facts").then((res)=>{
        res.json().then((res)=>{
            let mn=0, mx=4;
            let random=Math.floor(Math.random()*(mx-mn+1)+mn);
            fact.innerText=res[random].text;
        })
    });
}
