// Function type

/**
 * The global type Function describes properties like bind, call, apply,
 * and others present on all function values in JavaScript.
 *
 * It also has the special property that values of type Function
 * can always be called; these calls return any
 */
function doSomething(f: Function) {
  return f(1, 2, 3);
}

/**
 * !!! This is an untyped function call and is generally best avoided because of the unsafe any return type
 *
 * NOTE :
 * If you need to accept an arbitrary function but don’t intend to call it,
 * the type () => void is generally safer
 */
