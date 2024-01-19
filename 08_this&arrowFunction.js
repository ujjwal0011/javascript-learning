let user = {
    name: "Ujjwal",
    age: 19,
    message: function(){
        console.log(`${this.name} has just logged in`); /* The 'this' keyword inside a function refers to the object that the 
        function is a property of or the object that the function is called on */
        console.log(this);   // giving values of current context
    }
}

user.message();
user.name = "Bhardwaj"
user.message();

/*In a regular function like one() (below code), the value of "this" is determined by how the function is called.
When you call one() in the global scope, "this" inside the function will refer to the global object
(e.g., global in Node.js, or window in a browser environment).
*/
function one(){
    console.log(this);   
}

one()

let fun = () => {
    console.log(this);
}

fun()