/*Immediately Invoked Function Expressions(IIFE) are used to avoid
Global Scope Pollution:
Variables and functions inside stay private, avoiding conflicts with other code 
*/

(function fun(){  // named IIFE
    console.log("Hey");
})();

((name) => {
    console.log(`Hey, ${name}`);
})("Ujjwal");