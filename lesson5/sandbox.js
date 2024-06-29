// explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// arrays
var ninjas; //note - this is not an initialization, just a declaration
var ninjas2 = []; //THIS is an initialization
ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');
// union types
var mixed = []; //now we can add strings or numbers
var uid; //this can be either a string or a number
// objects
var ninja1;
ninja1 = { name: "ninja" };
ninja1 = []; //this will also work because a list is an object!
var ninja2; // this is a much more specific (and better) declaration
