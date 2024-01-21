// -------------------------------- If-Else ----------------------------------

let balance = 1100

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}


// -------------------------------- Switch Case ------------------------------

let val = 3

switch(val){
    case 1:
        console.log("Val is 1");
        break;
    case 2:
        console.log("Val is 2");
        break;
    case 3:
        console.log("Val is 3");
        break;
    default:
        console.log("Invalid val");
        break;
}


// -------------------------------- Truthy & Falsy ---------------------------

/*Truthy values:
"0",  "false",  " ",  [],  {},  function(){}

Falsy values:
false,  0,  -0,  BigInt 0n,  "",  null,  undefined,  Nan
*/

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): used for detecting null and undefined

let val1;
// val1 = 5 ?? 10              // 5
// val1 = null ?? 10           // 10 
// val1 = undefined ?? 15      // 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")