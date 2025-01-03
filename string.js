// Template String-> Used to combine literals and string
let str=`Hello Duniya`;
console.log(str);

const obj={
    price : 10,
    product : "pen"
}
console.log("The price of ",obj.product, "is ", obj.price);
// Add extra higlighting to the no(in blue colour)

console.log(`The price of ${obj.product} is ${obj.price}`);
// Print the no simply as string, don't highlight it
// This creation of strings by substituting variables is k/a "string interpolation"

// Escaping sequence

let s="Harsh\nBharwani";
console.log(s);
 
console.log(s.length); // 14

// String Methods--> Don't manipulate orignal string, return a dupliate. ecause they are immutable
s="         Harsh Bharwani"
console.log(s.toUpperCase());
console.log(s.trim()); // Remove all start and ending spaces

s="Harsh Bharwani"
console.log(s.slice(2, 6)); 

console.log(s.replace("r", "a")); // ONly one replacemet  allowed and that too of the first occurrence of the search value in the string

console.log(s.replaceAll("r", 'a')); // replace all occurrences
console.log(s);


console.log(s.charAt(0));

// s[0]='p' Not allowed, we can't modify the string in js
//Instead do
s=s.slice(0,2 );
console.log(s);
