// inference

/**
 * we didn’t have to specify Type in this sample.
 * The type was inferred - chosen automatically - by TypeScript.
 * We can use multiple type parameters as well
 */
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/**
 * Note that in this example, TypeScript could infer
 * both the type of the Input type parameter
 * (from the given string array), as well as the
 * Output type parameter based on the return
 * value of the function expression (number)
 */
