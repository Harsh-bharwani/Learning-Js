f=(a,b) => a*b;

console.log(f(1,2));

// Arrow Functions

const sum=(a,b)=>a+b;

console.log(sum(4,5)); // 9

const greet=()=> console.log('Hello');
greet();



function noOfVowels(str){
    let ct=0;
    for(let ch of str){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ) ct++;
    }
    return ct;
}  

console.log(noOfVowels("harsh bharwani"));

const vowels=(str)=> {
    let ct=0;
    for(let ch of str){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ) ct++;
    }
    return ct;
}
console.log(vowels("Harsh Bharwani"));

// Callback fun and for each loop

let arr=[1,2,3,4];
// Method-1
arr.forEach((val, idx, a)=>{ // here for each loo p pass each element as a parameter to the callback
    console.log(2* val, idx, a);
});

// Method-2
callback=(val)=>{
    console.log(val);
}
arr.forEach(callback);

greeting("hello");


function greeting(str){
    console.log(str);
    
}

let newArr= arr.forEach((val)=>{
    // console.log(val**2);
    return val**2;    
});
console.log(newArr);


// Callback parameters->(value, index, array reference)
// But not compulsary to pass all



// S="JKBDKS";
// S.forEach((val)=>{
//     console.log(val);
    
// });  Give error because for each is only used for the arrays

function execute(func) {
    func(); // Calls the passed function
}
execute(() => console.log("Hello from callback!"));

function greets() {
    console.log("Hello!");
}
greets.language = "English";
greets.callback=()=>{
    console.log("hfd");
}
greets.callback();


console.log(greets.language); // "English"
function gr(){
    console.log("h");  
}






