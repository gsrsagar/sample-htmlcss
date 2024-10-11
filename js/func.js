

/**
 * A function is a BLOCK OF code .statement which is to do
 * for some pruspose
 */
function add(a,b){
    // Implementation 
    let result = a+b;
    return result;
}

var students =["Kishore"]
var add1 =    (a,b)=> {
    console.log(students)
    let result = a+b;
    return result;
}
let r33 = add1(100,2); // function call
console.log(r33)
// console.log(r)

let student =[1231,124215,235235,1241241,4124124124,0,-1];
student.sort(
    (a,b)=>{ return a>b ? 1:-1}
);

let resul = student.find(
    function(e){
    return e%2==0;
}
);

student.forEach((x,i)=>{
    console.log(i)
    console.log(x)
})

student = student.map(x=>x-120000)
console.log(student)
console.log(student.findIndex((x)=>x==41243434124124))
// [1,3,4,5];
// 0 , 1
// 1, 3
// 4,4
// 8,5
let stu =[
    75,
76,
77

]
console.log(stu.reduce((a,b)=>a+b)/stu.length)
// console.log(resul)
