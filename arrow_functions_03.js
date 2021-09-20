console.log("arrow functions");

// function welcome(){
//     console.log("Welcome to Redbeat Academy!");
// }

// const welcome = function(){
//     let message = "Welcome to Redbeat Academy!"
//     console.log("Inside function " + message);
//     return message
// }


// console.log(welcome());

//re-write above function as arrow function
const welcome = ()=>{
    let message = "Welcome to Redbeat Academy!"
    console.log("Inside function: " + message);
    return "Welcome to Redbeat Academy"
}

console.log(welcome())

//arrow function allows developers to write shorter code
//when working with return statements
//if there is single return statement and nothing else,
//then you can get rid of return keyword and {}

const greeting = (name)=> "Welcome to Redbeat Academy, " + name

console.log(greeting("Prafful"))

const addition = (a, b)=> a+b

// const addition = function(a, b){
//     return a+b
// }

console.log(addition(5,3))