console.log("Prototypes");

//prototype is a global property which is available 
//to almost all object

class Vehicle{

    //define class properties with constructor
    constructor(model, color){
        this.model = model
        this.color = color
    }

    printDetails(){
        console.log(this.model + " : "  + this.color);
    }

}

const veh1 = new Vehicle("SUV", "Orange")
veh1.printDetails()
//veh1.yearOfMake is undefined here!
console.log(veh1.yearOfMake)
//check value of prototype
console.log(Vehicle.prototype)

//add new property to class with help of prototype
Vehicle.prototype.yearOfMake = 2010
//add new method to class with help of prototype
Vehicle.prototype.calculateAge = function(){
    let currentDate =  new Date()
    return currentDate.getFullYear() - this.yearOfMake
}


//check value of prototype
console.log(Vehicle.prototype)
//veh1.yearOfMake is defined!
console.log(veh1.yearOfMake)
console.log("Age: " + veh1.model + ": " + veh1.calculateAge())



const veh2 = new Vehicle("Sedan", "Blue")
veh2.printDetails()
console.log("Age: " + veh2.model +": " +   veh2.calculateAge())
console.log(veh2.yearOfMake)
const veh3 = new Vehicle("Mini", "Pink")
veh3.printDetails()
veh3.yearOfMake = 1995
console.log("Age: " + veh3.model + ": " + veh3.calculateAge())
console.log(veh3.yearOfMake)













