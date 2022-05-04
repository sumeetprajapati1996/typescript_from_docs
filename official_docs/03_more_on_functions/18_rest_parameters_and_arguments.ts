// Rest Parameters and Arguments

/**
 * ? Rest parameters
 *
 * we can also define functions that take an unbounded number of arguments using rest parameters
 * rest parameter appears after all other parameters, and uses the ... syntax
 */
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
/**
 * ! NOTE
 * * the type annotation on these parameters is implicitly any[] instead of any,
 * * and any type annotation given must be of the form Array<T>or T[], or a tuple type
 */

/**
 * ? Rest Arguments
 *
 * we can provide a variable number of arguments from an array using the spread syntax
 */
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
arr1.push(...arr2);

/**
 * ! NOTE
 * * in general, TypeScript does not assume
 * * that arrays are immutable. This can lead to some surprising behavior
 */
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args); //! A spread argument must either have a tuple type or be passed to a rest parameter

// * in general a const context is the most straightforward solution
// Inferred as 2-length tuple
const args2 = [8, 5] as const;
const angle2 = Math.atan2(args2);

/**
 * ! Using rest arguments may require turning on 'downlevelIteration' when targeting older runtimes
 */
