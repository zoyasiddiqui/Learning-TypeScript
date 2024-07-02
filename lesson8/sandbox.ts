
// FUNCTION BASICS
let greet: Function;

greet = () => {
    console.log("hello again");
}

// the question mark lets us know that this is an optional parameter
const add = (a: number, b: number, c?: number|string) => {
    console.log(a + b);
}

add(5, 10);

// here, c has a default value, so if we pass in nothing it will be 10
const add2 = (a: number, b: number, c: number|string = 10) => {
    console.log(a + b);
    console.log(c);
}

// here is how we specify the return value of a function
const minus = (a: number, b: number): number => {
    return a - b;
}

add2(5, 10);
add2(5, 10, 6);

let result = minus(10, 7);

// TYPE ALIASES
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const newGreet = (user: objWithName) => {
    console.log(`${user.name} ${user.uid}`);
}

// FUNCTION SIGNATURES
let hello: (a: string, b: string) => void;
hello = (name: string, greeting: string) => {
    console.log(`${greeting}, ${name}`);
}

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    return 0;
}

let logDetails2: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails2 = (ninja: person) => {
    console.log(`${ninja.name} ${ninja.name}`)
}