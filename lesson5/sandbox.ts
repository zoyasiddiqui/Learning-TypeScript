// explicit types
let character: string; 
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

// arrays
let ninjas: string[]; //note - this is not an initialization, just a declaration
let ninjas2: string[] = []; //THIS is an initialization
ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types
let mixed: (string|number)[] = []; //now we can add strings or numbers
let uid: string|number; //this can be either a string or a number

// objects
let ninja1: object;
ninja1 = {name: "ninja"};
ninja1 = []; //this will also work because a list is an object!

let ninja2: {
    name: string,
    age: number,
    beltColor: string
}; // this is a much more specific (and better) declaration

let age_any: any = 25;
console.log(age_any);
age_any = "hello";
console.log(age_any);

