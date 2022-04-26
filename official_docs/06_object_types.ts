/**
 * Object Types
 */
// we can use ',' or ';' as seperators in function object arguments
function printCoord(pt: { x: number; y: number }): void {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's x value is ${pt.y}`);
}
printCoord({ x: 3, y: 4 });

// Optional properties
function printName(obj: { first: string; last?: string }): void {
  console.log(obj.first);
  // General syntax
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  // Safe alternative using modern javascript syntax
  console.log(obj.last?.toUpperCase());
}
printName({ first: "Sumeet" });
printName({ first: "Sumeet", last: "Prajapati" });
