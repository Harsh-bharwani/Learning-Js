// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     console.log("I am Rejeted");
    
//     reject("Some Error Occured");
//     console.log("I am Resolved");
    
//     resolve("success"); 
// });


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data: ", dataId);
//             resolve("Data is printed Successfully.")
//             if(getNextData)
//             {
//                 getNextData();
//             }
//         }, 5000);
//     });
// };


// .then(callback) and .catch(callback)

// let promise=new Promise((resolve, reject)=>{
//     console.log("I am a promise");
    // resolve("success");
//     reject("technical-failure");
// });

// promise.then((res)=>{
//     console.log("status: ", res);
    
// });

// promise.catch((err)=>{
//     console.log("error: ",err);
// })


// Fetching Data one by one (Real time data fetching from servers)

// function asyncFun1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//         resolve("Success async1");
//         }, 3000);
//     }); 
// }

// function asyncFun2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//         resolve("Success async2");
//         }, 3000);
//     });
// }
// console.log("Fetching data 1....");
// asyncFun1().then((res)=>{
//     console.log("Result: ", res);
//     console.log("Fetching data 2....");
//     asyncFun2().then((res)=>{
//         console.log("Result: ", res);
//     });
// })


// Promise Chaining

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data is: ", dataId);
            resolve("success");
        }, 3000);
    });
}


console.log("Fetching data1...");

getData(1).then(()=>{
    console.log("fetching data 2...");
    return getData(2);
}).then(()=>{
    console.log("fetching data 3...");
    return getData(3);
}).then((res)=>{
    console.log(res);
})
