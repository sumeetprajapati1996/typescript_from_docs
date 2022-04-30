// Working with constrained values

/**
 * Here’s a common error when working with generic constraints
 */
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum }; // Throw below error
    /**
     * Type '{ length: number; }' is not assignable to type 'Type'.
     * '{ length: number; }' is assignable to the constraint of type 'Type',
     * but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'
     */
  }
}

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));
