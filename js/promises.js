const fetchData = new Promise((resolve, reject) => {
    let age = 16;
    let obj = {
        message: "you are eligible"
    }
    if (age >= 18) {
        setTimeout(() => {
            resolve(obj)
        }, 1000)
    } else {

        obj.message = "you are not eligible"
        setTimeout(() => {
            reject(obj)
        }, 1000)
    }
});



fetchData().then((data)=>{
    console.log(data);
    return fetchData();
}).catch(err=>{
    console.log(err)
})

async function awaitFunction() {
    const data = await fetchData();
    console.log(data);
}
awaitFunction();
console.log("Seennu");
console.log("seshu");
console.log("Sundar");
console.log("saint")