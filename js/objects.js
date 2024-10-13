
const stu = {
    name:"Surajini",
    age:22,
    rollNO:521,
    greet : function(){
        console.log(`My name is ${this.name} 
            and age is ${this.age} and roll no
             ${this.rollNO}`) // String
    },
    greet1 :()=>{
        console.log(`My name is ${this.name} and age is ${this.age} and roll no  ${this.rollNO}`) // String
    },
    
};
debugger
//stu.greet();
//.greet1();


// Object.create()

const sub ={
    name:"HTML and MERN",
    id:1,
    teach: function(){
        console.log(`qdcihq2iev niqinevin cinqdf ${this.name} and id is ${this.id}`)
    }
};

const obj1 = Object.assign({},sub);
const obj2 = Object.create(sub);
// const obj2 = JSON.parse(JSON.stringify(sub))
//console.log(obj2);
obj1.teach();
obj2.teach();


// Consutructor function
function Person(name,id,rollNO){
    this.name= name;
    this.id=id;
    this.rollNO = rollNO;
    this.greet = function(){
        console.log(`My name is ${this.name} and id is ${this.id}`)
    }
};

const o = new Person("Sujithindra",1,501);
//console.log(o);




const student ={
    name:"Sudha",
    email:"21KB1A0575@nbkrist.org",
    rollNo:"21KB1A0575",
    salary:2000,
    isJoined:true
}

// student."name"
// student["name"]
let s =["asaqs","adqdaqd"]
for (let v of s){
    console.log(v)
}
for(let k in student){
    console.log(`${k}:${student[k]}`)
}

const attendedStudent ={
    name:"Sagar",
    email:'adaqdad',
    "JFS    -8":{ attender: true,date:"wdwd"}

}

console.log(attendedStudent["JFS    -8"])
const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);
console.log(keys);
console.log(values);
console.log(entries)
// [["key1","value1"],["key2","value2"]]

const student1={
    "name":"Sudha",
    "email":"21KB1A0575@nbkrist.org",
    "rollNo":"21KB1A0575",
    "salary":2000,
    "isJoined":true
} // JSON 
console.log(JSON.parse((JSON.stringify(student1))))
console.log(JSON.parse('{ "name":true}'))
console.log(student);

console.log(student1);
















