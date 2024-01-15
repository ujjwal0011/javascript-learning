 // Date : Date is an object in javascript. 

// JavaScript stores dates as number of milliseconds since January 01, 1970

const myDate = new Date();
console.log(myDate) //Output : 2024-01-15T12:53:19.374Z

// We can use various methods to convert this date into more readable value:

console.log(myDate.toString()) //Output : Mon Jan 15 2024 18:23:19 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()) // Output :15/1/2024, 6:23:19 pm
console.log(myDate.toLocaleDateString()) //Output : 15/1/2024
console.log(myDate.toLocaleTimeString()) // Output : 6:23:19 pm

console.log(myDate.toDateString()) //Output : Mon Jan 15 2024
console.log(myDate.toTimeString()) // Output : 18:23:19 GMT+0530 (India Standard Time)
