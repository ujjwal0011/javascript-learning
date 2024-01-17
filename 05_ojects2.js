// Nested objects
let user = {
    email: "ujjwal@bhardwaj.com",
    name: {
        firstName: "Ujjwal",
        lastName: "Bhardwaj"
    },
    rank: 1
}

console.log(user.name);
console.log(user.name.firstName);


// concatenating two objects
let obj1 = {
    Jujutsu: "Kaisen",
    Attack_on: "Titan"
}

let obj2 = {
    Vinland: "Saga",
    Blue_Eye: "Samurai"
}

// let obj3 = Object.assign({}, obj1, obj2)   // another way to concatenate objects
let obj3 = {...obj1, ...obj2}   // spread operator (...)
console.log(obj3);


// Objects into array
let users = [
    {
        id: 1,
        email: "hello@world.com"
    },
    {
        id: 2,
        email: "world@hello.com"
    }
]

console.log(users[1]);


// accessing keys, values, entries
console.log(Object.keys(obj3));        // accessing keys ----------
console.log(Object.values(obj3));    // accessing values ------------> datatype is Array
console.log(Object.entries(obj3));  // accessing entries ----------

console.log(obj3.hasOwnProperty('Jujutsu'));