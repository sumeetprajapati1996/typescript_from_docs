// Type Assertions

/**
 * Sometimes you will have type of a value that Typescript can't know about
 * In that case you can specify its Type Assertion as shown in example below
 */
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// OR
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/**
 * NOTE!
 *
 * Assertions are removed at compile time so there is no runtime checking
 * if an specified Type Assertion is wrong, then an exception is not generated
 */

// Assertions are only allowed for more specific or less specific version of type
// const x = "hello" as number; // This throws and error

/**
 * In case if we want to implement more complex coersions
 * We can use two assertions
 * first one with a type of 'any' or 'unknown'
 */
// let expr: any;
// const a = (expr as any) as T; // Will still throw error because of type 'T'
