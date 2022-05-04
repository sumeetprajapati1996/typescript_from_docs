// Parameter Destructuring

/**
 * * You can use parameter destructuring to conveniently unpack objects provided
 * * as an argument into one or more local variables in the function body
 */
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

/**
 * ? Type Annotation
 * * for the object goes after the destructuring syntax
 */
function sum2({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

/**
 * ? verbose
 */
type ABC = { a: number; b: number; c: number };
function sum3({ a, b, c }: ABC) {
  console.log(a + b + c);
}
