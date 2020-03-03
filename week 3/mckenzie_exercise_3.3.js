/*
============================================
; Title:  singleton.js
; Author: Professor Krasso
; Date:   2 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates the use of the Singleton Pattern in a JavaScript program.
;===========================================
*/


// import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Exercise 3.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program

var DatabaseSingleton = (function() {    
    var instance;    
    function createInstance() {        
        var postgresDatabase = new Object("Database instance initialized!");        
        return postgresDatabase;    
    }     
    
    return {        
        getInstance: function() {// check for active instance
            if (!instance) {      
                instance = createInstance();            
            }  
        return instance;        
        }     
    } 
})();

function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance(); // database instance object
    var postgres = DatabaseSingleton.getInstance(); // database instance object

    console.log("Same database instance? %s ", oracle === postgres);// output
}

databaseSingletonTest();//call function

// end program