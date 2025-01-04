// Reference Checking

// For Functions

let greet=()=>{
    console.log("hello");
    
}
greet.nam="hjbdfs";
console.log(greet.nam);

let a=()=>{
    console.log("hello");
    
}
let b=()=>{
    console.log("hello");
    
}

a.nam="Harsh";
console.log(a==b);

console.log(b.nam);


// For strings
// AS primitive Variable( if hardcoded)
let a1= "hars";
let b1= "hars";
console.log(a1==b1); // true
console.log(a1); // print as a string

// As Reference Variable (if created with new keyword)

let a2= new String("hars");
let b2= new String("hars")
console.log(a2==b2); // false
console.log(b2); // print as an object

// console.log(typeof("harsh"));

// For arrays

// Always act as a reference variable
let arr1= [1,2,3];
let brr1= [1,2,3];
console.log(arr1==brr1); // false ( Diff references)
console.log(arr1); // print as an array


// As Reference Variable (if created with new keyword)

let arr2= new Array(1,2,3);
let brr2= new Array(1,2,3);
console.log(arr2==brr2); // false
console.log(arr2); // print as an array


p=[1,3,4,5];

console.log(p);
