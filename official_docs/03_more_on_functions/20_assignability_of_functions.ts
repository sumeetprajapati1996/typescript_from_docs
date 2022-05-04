// Assignability of Functions

/**
 * ? Return Type 'void'
 *
 * * Contextual typing with a return type of void
 * * does not force functions to not return something
 *
 * * (type vf = () => void), when implemented,
 * * can return any other value, but it will be ignored
 *
 * * the following implementations of the type () => void are valid
 */
type voidFunc = () => void;

const ff1: voidFunc = () => {
  return true;
};

const ff2: voidFunc = () => true;

const ff3: voidFunc = function () {
  return true;
};

/**
 * * And when the return value of one of these functions
 * * is assigned to another variable,
 * * it will retain the type of void
 */
const v1 = ff1();
const v2 = ff2();
const v3 = ff3();

/**
 * ? This behaviour exits so that
 * * the following code is valid even though
 * * Array.prototype.push returns a number and the
 * * Array.prototype.forEach method expects a function
 * * with a return type of void
 */
const srcc = [1, 2, 3];
const dstt = [0];

srcc.forEach((el) => dstt.push(el));

/**
 * ? There is one other special case to be aware of
 * * when a literal function definition has a void return type,
 * * that function must not return anything
 */
function fnfn2(): void {
  return true; // ! Type 'boolean' is not assignable to type 'void'
}

const fnfn3 = function (): void {
  return true; // ! Type 'boolean' is not assignable to type 'void'
};
