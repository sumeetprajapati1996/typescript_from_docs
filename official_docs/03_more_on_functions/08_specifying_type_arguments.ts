// Specifying Type Arguments

/**
 * TypeScript can usually infer the intended type
 * arguments in a generic call, but not always
 */
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ['hello']);
// error : Type 'string' is not assignable to type 'number'.

const arrVar = combine<string | number>([1, 2, 3], ["hello"]);
