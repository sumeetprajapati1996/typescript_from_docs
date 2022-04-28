// Function Type Expressions

/**
 *
 * The syntax (a: string) => void means
 * “a function with one parameter, named a, of type string,
 * that doesn’t have a return value”
 */
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

/**
 * Using Type Alias
 */
type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}
greeter2(printToConsole);
