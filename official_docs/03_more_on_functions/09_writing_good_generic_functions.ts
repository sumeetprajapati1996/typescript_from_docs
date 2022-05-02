// Writing good generic functions

/**
 * Push type parameters down
 */
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

/**
 * Use fewer type parameters
 */
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
/**
 * We’ve created a type parameter Func that doesn’t relate two values.
 * That’s always a red flag, because it means callers wanting to
 * specify type arguments have to manually specify an extra type argument for no reason.
 * Func doesn’t do anything but make the function harder to read and reason about!
 */

/**
 * Type parameters sould appear twice
 *
 * Sometimes we forget that a function might not need to be generic
 */
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet("world");

// We could just as easily have written a simpler version
function greet(s: string) {
  console.log("Hello, " + s);
}
