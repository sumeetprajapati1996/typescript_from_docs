// Optional parameters

/**
 * Functions in JavaScript often take a variable number of arguments.
 * For example, the toFixed method of number takes an optional digit count
 */
function f(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(2));
}

/**
 * We can model this in TypeScript by marking the parameter as optional with '?'
 */
function f1(x?: number) {
  // ...
}
f1(); // ok
f1(10); // ok
/**
 * NOTE
 * Although the parameter is specified as type number,
 * the x parameter will actually have the type number | undefined
 * because unspecified parameters in JavaScript get the value undefined
 */

/**
 * You can also provide a parameter default
 */
function f3(x = 10) {
  // ...
}

/**
 * Note that when a parameter is optional, callers can always pass undefined,
 * as this simply simulates a “missing” argument
 */
declare function f4(x?: number): void;
// cut
// All OK
f4();
f4(10);
f4(undefined);
