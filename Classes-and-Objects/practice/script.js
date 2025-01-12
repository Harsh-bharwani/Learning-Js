class User{
    constructor(fullName, email){
        this.fullName=fullName;
        this.email=email;
    }
    viewData(){
        console.log(`FullName is ${this.fullName}`);
        console.log(`Email is ${this.email}`);
    }
}

class Admin extends User{
    editData(fullName,email){ // Let it can edit as for a fullName, it can change the email Id
        super.fullName=fullName;  // super.fullName--> fullName of the User object, and only fullName is the one that we've passed from the arguments 
        super.email=email
        
    }
}