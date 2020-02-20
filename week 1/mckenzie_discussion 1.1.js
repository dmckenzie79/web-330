/*
============================================
; Title:  constructor prototype.js
; Author: Diandra McKenzie
; Date:   19 February 2020
; Description: An example of a constructor prototype.
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Picasso created Les Demoiselles d'Avignon in 1907.
 Dali created Young Woman at a Window in 1925.
 Klimt created The Kiss in 1907-1908.
*/ 

//import header
var header = require('../mckenzie-header.js'); 

//output
console.log(header.display("Diandra", "McKenzie", "Discussion 1.1"));

// start program

/** 
   * Description: Painting class
   * @param artist
   * @param title
   * @param year
   * @constructor
*/

function Painting(artist, title, year) {
    this.artist = artist;
    this.title = title;
    this.year = year;
    
}
//constructor prototype

Painting.prototype.toString = function (){
    return this.artist + " created " + this.title + " in " + this.year + ".";
};


// 3 painting classes
var picasso = new Painting ("Picasso", "Les Demoiselles d'Avignon", 1907)
var dali = new Painting ("Dali", "Young Woman at a Window", 1925)
var klimt = new Painting ("Klimt", "The Kiss", "1907-1908")


// output
console.log(picasso.toString());
console.log(dali.toString());
console.log(klimt.toString());


// end program