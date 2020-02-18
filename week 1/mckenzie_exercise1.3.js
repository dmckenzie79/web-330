/*
============================================
; Title:  function-class.js
; Author: Professor Krasso
; Date:   17 February 2020
; Modified By: Diandra McKenzie
; Description: Refresher on function classes
;===========================================
*/

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

//import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Exercise 1.3"));

// start program
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;


// get price
this.getPrice = function()
{
    return this.price
}

// get model
this.getModel = function()
{
    return this.model
}

// get details
this.getDetails = function()
{
    return "Manufacturer: "+ this.manufacturer + "\nModel: "+ this.getModel() + 
    "\nColor: "+ this.color + "\nPrice: "+ this.getPrice();
}

}
// new object with default values
var cellPhone = new CellPhone("Apple","iPhone X Plus", "Rose Gold", 1299.99)

//output  
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(cellPhone.getDetails());

 
// end program