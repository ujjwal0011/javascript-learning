const promise1 = new Promise(function(resolve, reject) {
    // do an async task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("Async task is completed");
        resolve() // connecting promise with then()
    }, 1000)
})

promise1.then(() => {              
    console.log("Promise consumed");
})                // then() has direct connection with resolve. Inside then(), it has a function which automatically receives an argument which returns the value from the promise. 


// another way to write promise()
new Promise((resolve, reject) => {
    setTimeout(() =>{
      console.log("Async task 2 completed"); 
      resolve() 
    }, 1000)
}). then(() => {
    console.log("Async task 2 resolved");
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Ujjwal", age: 19, height: "6ft"})  // returns the value to the callback function in then()
    }, 1000)
})

promise3.then((user) => {
    console.log(user);
})


// use of reject and resolve
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
    if(!error){
        resolve({name: "Jujutsu Kaisen", Genre: "Shounen"})
    }
    else{
        reject("Error is there")
    }
    }, 1000)
})

promise4
.then((user) => {
    console.log(user);
    return user.Genre
})
.then((genre) => {  // returns the value from the upper then()
    console.log(genre);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Finally the promise is either resolved or rejected");
})  // finally() will always execute


// promise by async await 
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
    if(!error){
        resolve({name: "Attack on Titan", Genre: "Shounen"})
    }
    else{
        reject("Error")
    }
    }, 1000)
})

// use try{} catch{} while using async await
async function     consumedPromise5(){
    try{
        const response = await promise5
        console.log(response);
    }

    catch(error){
        console.log(error);
    }
}

consumedPromise5()


async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})