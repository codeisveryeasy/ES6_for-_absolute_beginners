console.log("let keyword")
//below is global scope
let score = 100
let inif = 1
//scope
//What is scope?
/*
Scope as area/lines between { }
1. function has its own scope

function nameOfFunction(parameter1, parameter2){

}

2. if condition has its own scope

    if(check){

    }

   In case of if condition being in function, 
   scope of function and scope of if condition
   will be different.

 3. while loops, for loops will have their own scope  


*/

function testScope(){
    //let allows you to declare variables whose life
    //is only within the scope where they are declared

    //let allows you to declare variables which are
    //accessible only within the scope where they 
    //are declared

    //let allows you to declare block scoped variables
    let score = 88
    //var keyword can be used only for function level scope
    var inif = 44
    console.log("Block level Score: " + score)
    if(score >= 78){
        let inif = 22
        console.log("I am in block if: " + inif)
    }
    console.log("I am outside block but inside function scope if: " + inif)

}

//below will throw: score is not defined error
console.log("Global scope with score: " + score)
console.log("Global scope with inif: " + inif)

testScope()