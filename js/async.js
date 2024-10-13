
const student = {
    name: "Supreethi",
    id: 570,
    rollNo:501
}


/***YOu paid 500 to Bhavishya */
const payment = {
    isDone: true
};
let minute =0;
let setIntrl =  setInterval(function () {
    minute+=2;
    if(minute>=10){
        console.log("Payment Success ")
        clearInterval(setIntrl);
   
    } else {
        console.log("After 2 seconds"+JSON.stringify(student));
    }
}, 2000);


console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);
console.log(student);





const { id,name,rollNo } =student;
console.log(id);
console.log(name);
console.log(rollNo);

console.log(add(1,2))