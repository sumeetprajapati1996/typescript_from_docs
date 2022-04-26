// Literal Types

let changingString = "Hello World";
changingString = "Ola Mundo";
/**
 * TS will interpret this as 'let changingString: string'
 * this is because let is used
 * and we can ressign a new string value to it
 */

const constantString = "Hello World";
/**
 * Because const variable are not reassignable
 * TS will interpret this as 'const constantString = "Hello World"'
 */

/**
 * Literal type declaration
 * we can specify the secific value(s)
 * given variable or function arguments can be assigned
 */
let x: "hello";
x = "hello"; // Works
// x = 'howdy'; // Throws error because value doesn't match literal type "hello"

/**
 * Literal Unions
 * specifing the allowed values for a variable or function argument
 */
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello World", "left"); // Works
// printText("G'day, mate", "top"); // Mismatch with literal type results in error

/**
 * Numeric Literal types / Return literal types
 */
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

/**
 * Combining with non-literal types
 */
interface Options {
  width: number;
}
function configure(x: Options | "auto"): void {
  // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // Throws error
