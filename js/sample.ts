class Student {
    name:string;
    email:string;
    constructor(name,email){
        this.email=email;
        this.name=name;
    }
}

const obj1 = new Student("Susmith","susmith@gmail.com");
console.log(obj1);
