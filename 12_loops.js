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



