// Other Types to know

/**
 * void
 *
 * void represents the return value of functions which don’t return a value
 */
function noop() {
  return;
}
// NOTE :- void and undefined are not the same thing in TypeScript

/**
 * object
 *
 * object is not Object. Always use object
 *
 * NOTE that in JavaScript, function values are objects:
 * They have properties, have Object.prototype in their prototype chain,
 * are instanceof Object, you can call Object.keys on them, and so on.
 * For this reason, function types are considered to be objects in TypeScript
 */

/**
 * unknown
 *
 * The unknown type represents any value. This is similar to the any type,
 * but is safer because it’s not legal to do anything with an unknown value
 */
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b(); // Object is of type 'unknown'
}
/**
 * This is useful when describing function types because you can describe
 * functions that accept any value without having any values in your function body
 */
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
declare const someRandomString: string;
const objc = safeParse(someRandomString);

/**
 * never
 *
 * Some functions never return a value
 */
function fail(msg: string): never {
  throw new Error(msg);
}

/**
 * The never type represents values which are never observed.
 * In a return type, this means that the function throws an exception
 * or terminates execution of the program
 *
 * never also appears when TypeScript determines there’s nothing left in a union
 */
function fnn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something
  } else {
    x; // has type 'never'
  }
}
