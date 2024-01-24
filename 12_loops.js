// --------------------------- For loop -----------------------------------

let myArr = [3, 1, 8, 4, 5, 2, 9, 6, 10, 7]

for(let i = 0; i<=myArr.length; i++){
    if(myArr[i] % 2 == 0){
        // console.log(`Even number ${myArr[i]} is present at index ${i}`);
    }
}

for(let i = 0; i<=20; i++){
    if(i % 2 == 0){
        continue
    }
    // console.log(i);
}


// --------------------------- While loop ---------------------------------


let myArray = ['Toji', "Yuji", "Megumi"]

let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// --------------------------- Do While loop ------------------------------


let i = 1

do {
    // console.log(`Value of i is ${i}`);
    i++
} while (i <= 10);


let score = 11

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);


// --------------------------- For of and For in ------------------------

// for of is good for arrays and maps
// for in is good for objects

let newArr = [1, 2, 3, 4, 5]

for (const i of newArr) {
    // console.log(i);
}


let greetings = "Hello World"

for(const greet of greetings){
    // console.log(greet);
}


let map = new Map()
map.set('Jujutsu', 'Kaisen')
map.set('Attack on', 'Titan')
map.set('Solo', 'Leveling')
map.set('Demon', 'Slayer')

for(const [key, value] of map){
    // console.log(`${key} => ${value}`);
}

let obj = {
    Name: "Ujjwal",
    Age: 19,
    Nationality: "INDIAN"
}

for(const i in obj){
    // console.log(`${i}: "${obj[i]}"`);
}


// --------------------------- For each -----------------------------------


let arr2 = [2, 4, 6, 8, 10]

arr2.forEach( function (val){   // normal function
    // console.log(val);
} )

arr2.forEach( (val) => {        // arrow function
    // console.log(val);
})

function printMe(val){          // we can give a normal funciton that we have defined, in the array. 
                                //Ex- line no. 107
    // console.log(val);
}

arr2.forEach(printMe)

// printing values of objects which are inside of an array

let obj2 = [
    {
        language: "JavaScript",
        languageExtension: "js"
    },
    {
        language: "Java",
        languageExtension: "java"
    },
    {
        language: "Python",
        languageExtension: "py"
    }
] 

obj2.forEach( (val) => {
    console.log(val.languageExtension);
} )

