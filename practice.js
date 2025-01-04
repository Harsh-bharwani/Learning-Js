let n=prompt("Enter the no");

let a=[];
for(let i=1;i<=n;i++){
    a.push(i);
}
console.log(a);


console.log(a.reduce((prev,cur)=>prev+cur));
console.log(a.reduce((prev,cur)=>prev*cur));


