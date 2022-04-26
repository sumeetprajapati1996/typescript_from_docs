/**
 * Type Aliases
 */
type Point = {
  x: number;
  y: number;
};
function printPoints(pt: Point) {
  console.log(`The coordinates x value is ${pt.x}`);
  console.log(`The coordinates y value is ${pt.y}`);
}
printPoints({ x: 100, y: 100 });

// Extending Type Aliases
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

function getBear(animal: Bear) {
  return animal;
}

const bear = getBear({ name: "Bear", honey: true });
console.log(bear.name);
console.log(bear.honey);

// A type cannot be changed after being created
type WindowTypeAlias = {
  title: string;
};

// This will give an error
// type WindowTypeAlias = {
//   ts: TypeScriptAPI;
// };
