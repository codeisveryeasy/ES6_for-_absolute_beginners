console.log("Inheritance");

class Animal {

    constructor(speed) {
        this.speed = speed
    }

    hide() {
        console.log("I will hide.");
    }

}

//Elephant inherits the prperties and methods of Animal
//Elephant is child class of Animal
class Elephant extends Animal{
    constructor(size) {
        super()
        this.size = size
    }

    swim() {
        console.log("I will swim.");
    }

}

const ele = new Elephant("Huge")

console.log(ele.size);
ele.hide()
ele.swim()