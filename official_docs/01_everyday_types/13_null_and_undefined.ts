// null and undefined

/**
 * strictNullChecks off
 *
 * with this compilation flag set to off
 * the values that might be null or undefined can be accessed
 * they can also be assigned to property of 'any' type
 *
 * NOTE - it is recommended to turn strictNullChecks flag to 'ON'
 */

/**
 * strictNullChecks on
 *
 * with this compilation flag set to on
 * you will need to test those values
 * before using methods or properties on that value
 */
function doSometing(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log(`Hello, ${x.toUpperCase()}`);
  }
}

/**
 * Non-null Assertion Operator (Postfix !)
 *
 * This checks that the value is not null or undefined
 */
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}
liveDangerously(1);
liveDangerously(null); // Will result in error
/**
 * Use this operator only if
 * you don't want the value to be null or undefined
 */
