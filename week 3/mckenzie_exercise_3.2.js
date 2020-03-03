/*
============================================
; Title:  factory-example.js
; Author: Professor Krasso
; Date:   2 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates the use of the Factory Pattern in a JavaScript program.
;===========================================
*/

// import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Exercise 3.2"));


/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

// start program

//Database Function Classes
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle(properties) { // newly created class constructor with one argument
    this.username = properties.username || "o-admin";
    this.password = properties.password || "o-s3cret";
    this.server = properties.server || "localhost:5454";
    this.version = properties.version || "10g";
  }

function Informix(properties) { // newly created class constructor with one argument
    this.username = properties.username || "in-admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || "localhost:3030";

}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {//checks for database class
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } 
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});


var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

//newly created factory database object
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "sugar",
    password: "honey789!H",
    server: "localhost:8080",
    version: 8.2
});

//newly created factory database object
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "sour",
    password: "apple255O?",
    server: "localhost:1000",
});


//output
console.log(oracle);
console.log(informix);


// end program