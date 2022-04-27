// instanceof narrowing

/**
 * 'instanceof' operator is used for checking
 * whether or not a value is an instance of another value
 */
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
