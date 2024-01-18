function sum(num1, num2){
    return num1 + num2
}

console.log(sum(3,4))


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ujjwal"))


