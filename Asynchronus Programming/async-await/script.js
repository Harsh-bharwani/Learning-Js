function getData(dataId){ // async fun returns the promise
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data is: ", dataId);
            resolve();
        }, 2000);
    });
}

( async ()=> {
    await getData(1);
    await getData(2);
    await getData(3);
})();

// OR
( async function () {
    await getData(1);
    await getData(2);
    await getData(3);
})();

// OR

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();