// Rest operator in js (ES 6)

function add1(...args){ // length is not fixed vairables length 
    // let arrVar = args
    // return 
    console.log(args);
    return args.reduce((a,b)=>a+b);
}


// add1(1,2);
// add1(1,2,3);
// add1(1,3,3,4,5);




function add(a,b=10){
    return a+b;
}

console.log(add(4,20));

let marks =[12,44,12,3,12,12]
let props ={
    isLMSdone : { is:true},
    isIDGenrated:true,
    rollNoAllocated:true,
    print:function(){
        console.log("dqdqd+"+this.isLMSdone+"aqdaqdqad")
    }
}

let students =[
    { name:"Nikhil",...props,marks:[...marks]},
    { name:"Naveen",...props,marks:[...marks]},
    { name:"Sai",...props,marks:[...marks]}
];

students[0].isLMSdone.is=false;
console.log(students)

/// Shallow Deepy Copy




let student={
    name:'Sudhakar',
    id:501
}

let student2 =student;
student2.name="Nikhil";
