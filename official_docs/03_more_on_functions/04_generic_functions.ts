// Generic Functions

/**
 * In TypeScript, generics are used when we want to describe
 * a correspondence between two values.
 * We do this by declaring a type parameter in the function signature
 */

/**
 * This function has a return type of any
 * so return type cannot be determined
 */
function firstElement(arr: any[]) {
  return arr[0];
}

/**
 * generics are used when we want to
 * describe a correspondence between two values.
 * We do this by declaring a type
 * parameter in the function signature
 */
function secondElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
const element = secondElement([1]);
