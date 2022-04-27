// Assignments

let someVariable = Math.random() < 0.5 ? 10 : "hello world"; // inferred as string|number
someVariable = 1;
console.log(someVariable); // inferred as number
// someVariable = true; // invalid as declaration inferred it as string|number
