const fetchData = () => {
    return new Promise((resolve, reject) => {
        let age = 18;
        if (age >= 18) {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 5000);
        } else {
            setTimeout(() => {
                reject("Data rejected!");
            }, 5000);
        }
    });
};


fetchData().then((result)=>{
    return fetchData()
}).catch((err)=>{
    console.log(err)
})


async function fetchDataAsync() {
    const data = await fetchData(); // Waits for fetchData promise to resolve
    console.log(data);
    console.log("It is after Promise and it is 1");
    console.log("it is after Promise and it is 2")
  
};
fetchDataAsync();
