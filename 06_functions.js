function sum(num1, num2){
    return num1 + num2
}

console.log(sum(3,4))


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ujjwal"))

/*
When we design an e-commerce website so in that we don't know how many things a user will add to his/her cart, so for that we can use(...) rest operator. It will store the values in an array.
Lookwise it's same as spread operator but we will we knowing its functionality in the code below.
*/

function cartItemsCounts(...num1){
    return num1
}

console.log(cartItemsCounts(1, 2, 3, 4, 5, 6));  // [1, 2, 3, 4, 5, 6]


// objects into functions
let user = {
    name: "Ujjwal",
    email: "ujjwal@gmail.com"
}

function details(anyObject){  // passing any random name of the object as parameter 
    return `${anyObject.name} has logged-in with email id: ${anyObject.email}`
}

console.log(details(user));  // passing object name as argument in the function

console.log(details({        // another method to pass arguments in the function
    name: "Ujjwal",
    email: "ujjwal@gmail.com"
}));


// arrays into function
let arr1 = [1, 2, 3, 4, 5]

function myArr(getArray){
    console.log(getArray[1]);
}

myArr(arr1)
