console.log("Classes in ES6");

//classes as blueprint of an object

//blue print contains methods and properties
//if blueprint is to be defined for vehicle
/*e.g. properties:
    1. countOfWheels
    2. bodycolor
    3. hillAssist (true/false)
    4. price
  e.g. methods:
    1. accelerate()
    2. deAccelerate()
    3. igniteEngine()
    4. switchOffEngine()
    5. brake()
    
 */ 

    //create a class
    class Vehicle{
        constructor(model, color, wheelCount, yearOfMake){
            this.model = model
            this.color = color
            this.wheelCount = wheelCount
            this.yearOfMake = yearOfMake
        }

        igniteEngine(){
            console.log(this.model + " engine is ignited. Wrrroooommm!!!!");
        }

        getAgeOfVehicle(){
            let currentDate = new Date()
            return currentDate.getFullYear() - this.yearOfMake
        }

    }

    //constructor gets called automatically whenever
    //an instance of class is created

    const vehicleSuv = new Vehicle("SUV", "green", 4, 2016 )

    const vehicleCycle = new Vehicle("Cycle", "black", 2, 2021)


    console.log(vehicleSuv.model) 
    console.log(vehicleSuv.color)
    console.log(vehicleSuv.wheelCount)
    console.log(vehicleSuv.yearOfMake)

    

    console.log(vehicleCycle.model) 
    console.log(vehicleCycle.color)
    console.log(vehicleCycle.wheelCount)
    console.log(vehicleCycle.yearOfMake)


    vehicleSuv.igniteEngine()

    console.log("Age of " + vehicleSuv.model + " is " + vehicleSuv.getAgeOfVehicle())
