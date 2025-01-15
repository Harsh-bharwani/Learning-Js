console.log("one");
console.log("two");

// setTimeout(()=>{
//     console.log("hello");
    
// }, 3000); // in mili seconds

// Data coming with delay

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data: ", dataId);
        if(getNextData)
        {
            getNextData();
        }
    }, 2000);
};

// Callback hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        })
    });   
});


console.log("three"); // don't wait for setTimeout
console.log("four"); // don't wait for setTimeout

