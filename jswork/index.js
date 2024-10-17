const p = new Promise((resolve, reject) => { 
    const a = 12;
    if (a > 30) { 
        resolve("ok"); 
    } else { 
        reject("bad"); 
    }
});

p.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log(error); // Log the actual error
})
.finally(() => {
    console.log("all resources cleaned up");
});
