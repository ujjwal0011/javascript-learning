// The reason var should not be used because it can alter the data inside or outside of the block scope

let num1 = 10
const num2 = 20
var num3 = 30

if(true){
    let num1 = 100
    const num2 = 200
    var num3 = 300
}

console.log(num1);
console.log(num2);
console.log(num3); // we declared num1 using var outside of the scope but it changed the value to 100 which was inside of the scope
// same is not happened with let and const