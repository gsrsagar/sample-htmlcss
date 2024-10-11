
const fetchStudents = (c) => {
    let students = [
        {
            name: "Nikhileswarreddy Dadu", id: 501,
            courses: [
                { courseName: "CSE", id: 1 },
                { courseName: "ECE", id: 2 }
            ]
        },
        {
            name: "Nithin Kumar Swamy Singanaraju", id: 502,
            courses: [
                { courseName: "CSE", id: 1 },
                { courseName: "ECE", id: 2 }
            ]
        },
        {
            name: "Narendra Nadan Raja", id: 503,
            courses: [
                { courseName: "CSE", id: 1 },
                { courseName: "ECE", id: 2 }
            ]
        }
    ];
    return c(students);
};

fetchStudents(function(x){
    console.log(x)
});


(function add(a,b){
    console.log(a+b)
})(1,300) //IIF

// const high = (fun)=>{
//     return fun(1,2)
// }
// console.log(high(add))



// a();



var a=5;
var b=1;

function abcd(x,y){
    var a=6;
    var result = x+y
    console.log(a) //6
    console.log(b); // 1
    console.log("x+y:"+result); /// 3

}
abcd(1,2);
// console.log(result) // 3


// Example of an IIFE
(function() {
     const message = "I am an IIFE!";
     console.log(message); // Outputs: I am an IIFE!
    })(); 

