// --------------------------- For loop -----------------------------------

let myArr = [3, 1, 8, 4, 5, 2, 9, 6, 10, 7]

for(let i = 0; i<=myArr.length; i++){
    if(myArr[i] % 2 == 0){
        console.log(`Even number ${myArr[i]} is present at index ${i}`);
    }
}

for(let i = 0; i<=20; i++){
    if(i % 2 == 0){
        continue
    }
    console.log(i);
}