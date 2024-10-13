let students = ["Sesi", "Sukumar", "Dheeraj", 'Seenu', "Venu", "Banti", "chanti", "NithinJKNC"];



students.push("sagar");
students.unshift("nikhitha");
//  students.splice(1,4);

console.log(students.slice(1, 4))
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
};


const getData = (callback) => {
    return callback({ "Name": 'Sudenree', id: 501 })
}


getData((x) => {
    console.log(x)
})
students.forEach((x, i, a) => {
    console.log(`${x} and index is ${i}` + a)
});






const student2 = {
    values: ["Venu", "Samrat", "Samudra Prasad"],
    forEach: function (c) {
        return c(this.values);
    }
}

student2.forEach(function (x) {
    console.log(x)
});



//SET
const set = new Set();
set.add("Susmi");
set.add("suri");
set.add("sanjo");
set.add("sanjo");
console.log(set);



let Str = "this is good day it is always happy for me";
//{ 'h'=>1, 't'=>1, 'i'=>1, 's'=>1 }
const freqMap = new Map();
for(let i=0;i<Str.length-1;i++){
    let char = Str.charAt(i);
    if(char!==' '){
        if(freqMap.has(char)){
            let value = freqMap.get(char);
            freqMap.set(char,value+1)
        } else {
            freqMap.set(char,1);
        }
    }
}
console.log(freqMap)


export function add(a,b){
    return a+b;
}