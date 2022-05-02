// Overload signatures and Implementation signatures

/**
 * Often people will write code like this and not understand why there is an error
 */
function fx(x: string): void;
function fx() {
  // ...
}
fn();
/**
 * Error NOTE
 * The signature of the implementation is not visible from the outside.
 * When writing an overloaded function, you should always have
 * two or more signatures above the implementation of the function.
 */

/**
 * The implementation signature must also be compatible with the overload signatures
 */
// Argument type compatibility
function fn2(x: boolean): void;
// Argument type isn't right
function fn2(x: string): void; // This overload signature is not compatible with its implementation signature
function fn2(x: boolean) {
  // ...
}

// Return type compatibility
function fn3(x: string): string;
// Return type isn't right
function fn3(x: number): boolean; // This overload signature is not compatible with its implementation signature
function fn3(x: string | number) {
  return "oops";
}
