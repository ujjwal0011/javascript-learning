let Name = "Ujjwal"
let surName = "Bhardwaj"

console.log(`Hello, my name is ${Name} ${surName}`); // a good way to write in strings


// -----------------------some functions in strings----------------------


const str = "Captured-canvas"

console.log(str[2]); // its not an array, its a key:value pair

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(3));

console.log(str.indexOf('c'));

const newStr = str.substring(9, 15)
console.log(newStr);

const anotherStr = "    Ujjwal    "
console.log(anotherStr);
console.log(anotherStr.trim());

const url = "https://ujjwal.com//ujjwal%69bhardwaj%69github"
console.log(url.replace(/%69/g, '-'));
console.log(url.includes('https'));
console.log(url.split('/'));