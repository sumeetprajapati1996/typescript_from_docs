// typeof guard

/**
 * Types it checks
 *
 * string
 * number
 * bigint
 * boolean
 * symbol
 * undefined
 * object
 * function
 */

/**
 * This example checks if the type is number or string
 * and operates according to the argument type
 */
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
