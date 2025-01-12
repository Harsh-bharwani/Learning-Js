const student={// Note every property and method should be separated by comma
    fullname: "Harsh Bharwani",
    age: 18,
    // definig function inside an object
    printAge1: function () {
        console.log("age: ", this.age);
    },
    // or
     printAge2(){
        console.log("age: ", this.age);
        
    }
}
student.printAge1();
student.printAge2();


// Protype => To fetch the property of the prototype object
const animal1 = {
    eat() {
      console.log("Eating");
    },
  };
  
  const dog1 = Object.create(animal1); // dog inherits from animal
  dog1.bark = function () {
    console.log("Barking");
  };
  
  dog1.eat(); // Output: Eating
  dog1.bark(); // Output: Barking
  
    // OR

const animal2={
    eat(){
        console.log("eating");
    }
}
const dog={
    fullname: "German Shefard"
}
dog.__proto__=animal2;
dog.eat();

const animal3={
    eat(){
        console.log("animal eating");
    }
}
const dog3={
    fullname: "German Shefard",
    eat(){
        console.log("dog Eating");
    }
}
dog3.__proto__=animal3;
dog3.eat();

// Inheritance

class Person{
    constructor(){
        this.species="Homo-saphiens";
    }
}
class  Engineer extends Person{
    salary=7;
}
harsh=new Engineer();
console.log(harsh.species);
 

// super keyword => uned to invoke the parent class
// It's compulsary to use the super() (It simply initailize the parent class constructor) befote using this keyword in child class constructor.


class Person2{
    constructor(fullName){
        this.fullName=fullName;
    }
    eat(){
        console.log("eating");
        
    }
}
class Engineer2 extends Person2{
    constructor(branch, fullName){
        super(fullName);
        this.branch=branch;
    }
    work(){
        super.eat(); //We also use super to invoke any function or property of the parent class 
        console.log("working hard");
    }
}

let harshBharwani=new Engineer2("CS", "Harsh Bharwani");
console.log(harshBharwani);

console.log(harshBharwani.fullName);


