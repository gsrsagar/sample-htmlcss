var a ="Sampath";

const student={
    name:"Sai Venkata M",
    id:"5A0",
    print:function(a,b){
        console.log(a);
        console.log("My name is"+this.name+"My Id is "+this.id);
    }
};

let obj ={
    name:"Sampoornesh",
    id:"5A1",
}
var n = student.print.call(obj,'1w313','131');
n();
//student.print();
console.log(student)