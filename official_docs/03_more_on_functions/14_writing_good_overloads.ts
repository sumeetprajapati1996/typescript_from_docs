// Writing Good Overloads

/**
 * Let’s consider a function that returns the length of a string or an array
 */
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

/**
 * This function is fine; we can invoke it with strings or arrays.
 * However, we can’t invoke it with a value that might be a string or an array,
 * because TypeScript can only resolve a function call to a single overload
 */
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]); // because TypeScript can only resolve a function call to a 'single overload'

/**
 * Because both overloads have the same argument count and same return type,
 * we can instead write a non-overloaded version of the function
 */
function len2(s: string): number;
function len2(arr: any[]): number;
function len2(x: any[] | string) {
  return x.length;
}

/**
 * NOTE :- Always prefer parameters with union types instead of overloads when possible
 */