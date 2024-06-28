let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi';
age = 40;
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(10));

// console.log(circ("hello"));
// this will only throw an error if we specify : number to the parameter above. 