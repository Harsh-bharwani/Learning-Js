console.log('Harsh Bharwani');
console.log('I love js');
console.log('I am hardworking');

let y=Symbol('Hello');

let z=BigInt("123");

{
    let p;
    p=5;
    console.log(p);
}
{
    let p=6;
    console.log(p);
    
}

const pi=3.14;
// pi=8;// error , we can't modify const variables

const student={
    name: "Harsh",
    age: 20,
    isCool:true
}

console.log(student["name"]);
console.log(student.age);  // no quotes while using '.' operator

student['age']++; // changing the object data
// We can update the keys of object declared using const 
console.log(student.age);  

// Short-Project

const product={
    title:"Ball Pen",
    price:50,
    offer:10,
    isDeal:true
}

// '+' Operator

console.log(1+3); // 4
console.log("123"+4); // 1234


const profile={
    username: "@shradhakhapra",
    name:"Shradha Khapra",
    follow:true,
    posts: 195,
    followers:600,
    following:4,
    threasUsername:"sharadhakhapra",
    category:"Enterpreneur",
    office:"Apna College",
    thinking:"To educate someone is the highest privilege "
}

console.log(typeof(profile.name));


