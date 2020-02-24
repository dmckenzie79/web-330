/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   24 February 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to build prototypes in JavaScript.
;===========================================
*/

// import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Exercise 2.2"));


/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// start program

//object literal
var person = {
    getAge: function() {
      return this.age
    }
  };
 
// new object literal
var deborah = Object.create(person, {
    "age": {
      "value": "26"
    },
    "fullName": {
      "value": "Deborah Denise Jackson"
    }
});
  

//output
console.log("The person's full name is %s.",deborah.fullName);
console.log("The person's age is %s.", deborah.getAge());


// end program