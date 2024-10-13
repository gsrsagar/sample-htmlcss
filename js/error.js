function CustomExp(msg){
    this.msg = msg;
}


const div = ((x, y) => {
    return x / y;
})

console.log(div(10, 0));

let s1 = {
    name: "Sunil Basha"
}

try {

    console.log(s);
}catch(error){
   throw new CustomExp("New custome rasiede")
}



function add(a, b) {
    return a - b;
}

const add1 = (a,b)=>{
    return a+b;
}

let result = add(1, 2);
console.log(result);



const fetchData = (c) => {
    let students = ["Suraj", "Sampath", "Sunisith", "Simran basha"];
    return c(students);
}


fetchData((x) => {
    console.log(x)
});

