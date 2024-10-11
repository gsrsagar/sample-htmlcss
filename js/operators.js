/***
 * Logical Operators and Conditionals
 */

/***
 * if    -- login 
 *  @ ,     ****  -invlid
 */

/****
 * if , else
 */

/***
 * if 
 * else if
 * else if
 * else
 */

/***
 *  1. 90%
 *  2. 65%  <90%
 */

let age=36;
if(age>=18) 
    console.log("YOu are eligible");
 else {
    console.log("Not eligible")
 }


if(age<=10){
    console.log("Childhood")
} else if(age>=11 && age<20){
    console.log("Teenage")
} else if(age>20 && age<=35){
    console.log("adult hood")
} else if(age>35 && age<=50){
    console.log("father or motherhood")
} else {
    console.log("oldage")
}


/***
 * ATM, Watrer Dispensetr, Coffee , IVR
 */
var option="B1313AL";
switch(option){
    case "WITHDRAW": console.log("It is withdraw oprtions");
    break;

    case "DEPOSIT": console.log('DEp[osit');
    break;

    case "BAL":console.log("BAL");
    break;

    default : console.log("invaid Please enter a valid option");
}


let students =["Sashi","Sukumar","Siindhar","Sai","Seeeeeenu","Abhi","Lohi","Rajeev","bd","vignesh","banti","Chanti"];
// 0 <= n-1
// 0 <n
for(let x=0 ;x<students.length;x++){
    console.log("Seeenu .......")
}

let i=100;
while(i>0){
    console.log("Batrry is decreasing"+" :"+i--);
}
i=100;
do {
    console.log("Batrry is decreasing"+" :"+i--);
}while(i>0);

let elementToFind =5;

for(let i=1;i<=100;i++){
    console.log("I Am looping"+i)
    if(i==5){
        console.log("I found"+i)
        break;
    }
    else continue;
    console.log(i)
}


