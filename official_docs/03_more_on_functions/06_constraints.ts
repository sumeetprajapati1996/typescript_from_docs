// Constraints

/**
 * Sometimes we want to relate two values,
 * but can only operate on a certain subset of values.
 * In this case, we can use a constraint to limit
 * the kinds of types that a type parameter can accept
 */
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// return type : number[]
const longerArray = longest([1, 2, 4], [2, 3]);

// return type: string
const longerString = longest("some", "string");

// Errpr because property 'length' not applicable on numbers  
// const notOk = longest(10, 100);
