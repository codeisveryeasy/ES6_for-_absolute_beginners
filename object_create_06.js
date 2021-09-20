console.log("Object.create()");

//1. It creates a new object
//2. It uses an existing object as prototype
//   of newly created object   

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

// const veh1 = new Vehicle("SUV", "Red")
// veh1.printDetails()

const newTechVehicle = Object.create(Vehicle)
//assign new properties to newTechVehicle
newTechVehicle.wingspan  = "10 meter"
newTechVehicle.flytime = "4 hr"
//use inherited properties from Vehicle
newTechVehicle.model = "FlyingCAR"
newTechVehicle.color = "Sky Blue"

console.log(newTechVehicle)

