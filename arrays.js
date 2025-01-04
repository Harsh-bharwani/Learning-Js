let a=[1,2,3]
console.log(a[4]);

a[0]=4; // Array is mutable in JS
// console.log(a[0]);


let str="pwioi";
for(let i of a){
    console.log(i);
}

a.push("hello")
console.log(a);
// a.pop();
// console.log(a.pop());
console.log(a.toString()); // Don't change the orginal array 


a.shift(); // Remove the first element of the array 
console.log(a);

a.unshift(5); // Add the arg to the first place of the array

console.log(a);

// splice --> To modify a subarray

a.splice(1, 0, 5, 6);
console.log(a);


let exp=[5, 7, 3, 9];
exp.splice(2,0,9,5);
console.log(exp);

console.log(exp.slice(2));

console.log(exp.splice(3));// Delete all no having index >=3

console.log((exp));


let companies=['facebook', 'microsoft', 'netflix', 'uber', 'google'];
companies.shift();

companies.splice(2,1,'Ola');

companies.push('Amazon');
console.log(companies);
