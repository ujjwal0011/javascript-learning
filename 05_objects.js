let sym = Symbol("Hello")
let user = {
    Name: "Ujjwal",
    age: 19,
    year: 3,
    [sym]: "World"          // correct way to define symbol in objects 
}

console.log(user.Name);     
console.log(user["Name"]);  // a good practice to access objects

console.log(user[sym]);     // accessing a symbol from objects

user.Name = "Bhardwaj"   // changing values in objects
// Object.freeze(user)         // freezing the object so that values can't be changed
user.Name = "Ujjwal"     // this value will not be changed now

console.log(user);

// adding a function to an object

user.greeting = function(){  
    console.log(`Hello JS User, ${this.Name}`);  // for referencing same object, we use "this" keyword
}

console.log(user.greeting());  // accessing a function from object
