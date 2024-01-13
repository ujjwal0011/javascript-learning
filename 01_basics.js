// ----------------------var, const, let, etc------------------------


console.log("Jai Shree Krishna")

const age = 19

let Name = "Ujjwal" // use instead of var

var surName = "Bhardwaj" // not a good practice to use var

/* 
by using var, values which are in a scope can be changed. So, that's why we don't use it.
*/

let hobby // undefined

console.table([Name, surName, age, hobby])

console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined



// ------------------type conversion-----------------------

let num = 7
let strNum = String(num)

console.log(strNum) // 7
console.log(typeof strNum) // string

let str = "xyz"
let numStr = Number(str)

console.log(numStr); // NaN (Not a Number)
console.log(typeof numStr); // number


// -----------------comparisions-------------------------

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
Comparisons convert null to a number, treating it as 0. 
That’s why (line no. 44) null >= 0 is true and (line no. 42) null > 0 is false.
*/

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

/*
== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.

=== is used for comparing two variables, but this operator also checks datatype and compares two values.
*/


// -------------------------------- Stack & Heap ------------------------------

// Ex. of Stack (gives the copy of the data)

let one = 1
let two = one
two = 2

console.log(one);
console.log(two);

// Ex. of Heap (gives the reference of the data)

let userOne = {
    id: "abc"
}

let userTwo = userOne

userTwo.id = "xyz"

console.log(userOne.id);
console.log(userTwo.id);
