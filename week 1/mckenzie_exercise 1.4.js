/*
============================================
; Title:  duck-typing.js
; Author: Professor Krasso
; Date:   18 February 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to create interfaces in a JavaScript program.
;===========================================
*/
 
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Car: <Model>
 Truck: <Model>
 Jeep: <Model>

*/

// import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Exercise 1.4"));

// start program

/**
 * Description: Car class
 * @param model
 * @constructor
 */

function Car(model) {
    this.model = model;
  }
  
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
};
  /**
   * Description: Truck class
   * @param model
   * @param year
   * @constructor
   */

  function Truck(model, year) {
    this.model = model;
    this.year = year;
  }
  
  Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
};
  /**
   * Description: Jeep class
   * @param model
   * @param year
   * @param color
   * @constructor
   */

  function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  
  Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
};
  // Empty Array
  var racetrack = [];
  
  
 function driveIt(vehicle)
 {
    vehicle.start();    
    racetrack.push(vehicle);
 };

 // 3 vehicle classes
    
var audi = new Car('Sedan');
var ram = new Truck('2500', '2020');
var cherokee = new Jeep('Grand Cherokee', '2016', 'Black');
 

console.log("");

driveIt(audi);
driveIt(ram);
driveIt(cherokee);

console.log('\n-- The following vehicles have been added to the racetrack --')

// Loop over the racetrack array and output the results
for (let x = 0; x < racetrack.length; x++) {
console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program


