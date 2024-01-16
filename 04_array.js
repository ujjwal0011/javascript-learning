let arr = [0, 1, 2, 3, 4, 5]
console.log(arr[2]);
console.log(arr);

let arr2 = new Array(0, 1, 2, 3, 4, 5) // another way to define an array
console.log(arr2);

// ------------------- Some Array methods ---------------------------

arr.push(9)                   // push an element into the last
console.log(arr);
arr.pop()                     // pop the last element
console.log(arr);  

arr.unshift(7)                // add an element into the start and shifts the whole array (not a good practice)
console.log(arr);  
arr.shift()                   //removes the first element
console.log(arr);  

console.log(arr.includes(9)); // searches an element
console.log(arr.indexOf(9));  // gives the index of the element if present otherwise gives -1

let newArr = arr.join()       // joins the array and make it to strings
console.log(newArr);          // 0,1,2,3,4,5 => string
console.log(typeof newArr);   // string


console.log("A ", arr);       // [0, 1, 2, 3, 4, 5]

let myArr1 = arr.slice(2, 5)  // slices the array from index (2, 5) but doesn't change the original array
console.log(myArr1);          // [2, 3, 4]
console.log("B ", arr);       // [0, 1, 2, 3, 4, 5]


let myArr2 = arr.splice(3, 3) // cuts the array from (3->starting index to, 3->no. of elements) and cuts them from the original array
console.log("C ", arr);       // [0, 1, 2]
console.log(myArr2);          // [3, 4, 5]
