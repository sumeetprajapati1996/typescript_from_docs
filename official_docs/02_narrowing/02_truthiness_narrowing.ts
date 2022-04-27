// Truthiness Narrowing

/**
 * In JavaScript, constructs like if first
 * “coerce” their conditions to booleans
 * to make sense of them, and then choose their branches
 * depending on whether the result is true or false
 *
 * Values like,
 * - 0
 * - NaN
 * - "" (empty string)
 * - 0n (bigint version of 0)
 * - null
 * - undefined
 * "coerce" to (false), other than these all coerce to (true)
 */

/**
 * Running values through Boolean function for coercion
 */
Boolean("hello"); // results in (true)
!!"world"; // results in (true)

/**
 * Leveraging this behavior for guarding
 * against the values like null or undefined
 */
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
