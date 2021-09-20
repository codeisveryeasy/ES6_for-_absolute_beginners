console.log("this keyword");


/*
1. In a class, this refers to the class
2. If used outside the class, this refers to global object
3. In an event, this refers to the element who received an event



*/
//scenario 2
//this refers to window
console.log(this);
//alert()
//this.close()
//get status of window: whether it is open or close
console.log("Window closed status:" + this.closed);

//this refers to window
const welcome = function(){
    console.log(this)
}

welcome()

class Person{

    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    //secnario 1
    //inside a class this refers to class
    fullName(){
        return this.firstname + " " + this.lastname
    }

    printFullName(){
        console.log(this.fullName())
    }

}

const p = new Person("Prafful", "Daga")
console.log(p.fullName())
p.printFullName()

//working with this in event listener
 const btn = document.querySelector("button")

 console.log(btn);
 btn.addEventListener("click", hideMe)

 function hideMe(){
     //scenario 3
     //this in event handler refers to element who
     //received the event
     console.log("this refers to: ")
     console.log(this)
     //use this to change any thing for button
     this.style.display = 'none'
 }