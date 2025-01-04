let a=[1,2,3,4,5]
// Initially prev=a[0], curr=a[1]
const output=a.reduce((prev, cur)=>{
    return prev+cur // prev=returnedValue(prev+cur), cur =next element 
});


// Note-> If the length of the array is 1, then reduce returns the single element of the array directly, with no iterations.

// We can customize our acc and can give it a default value
// As:- const output=a.reduce((acc, cur)=>{
//     return acc+cur, 0;
// });
const out=a.reduce((acc, cur)=>{
    return acc+cur;
},0);
console.log(out);
