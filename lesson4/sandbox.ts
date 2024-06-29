
//arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');

// when we assign to an array, we can't put multiple types of objects into an array
// ie, on initializatio, we fix the type of the values of the array
// WE ALSO FIX the type of the actual object. 

// however, we can also use mixed arrays, 
// as long as we define them as mixed arrays when we initialize them
let mixed = ['ken', 4, 'chun-li', 8, 9, true]

mixed.push('rya');
mixed.push(9);
mixed[0] = 3;

// objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
};

ninja.age = 40;
// ninja.age = "thirty"; this will not work

// if we want to reset ninja, it would have to be to the same type of object
// with all of the same properties