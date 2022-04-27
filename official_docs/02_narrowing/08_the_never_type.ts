// The Never Type

/**
 * When narrowing, you can reduce the options of a union to a point
 * where you have removed all possibilities and have nothing left.
 * In those cases, TypeScript will use a never type
 * to represent a state which shouldn’t exist.
 */

/**
 * Exhaustive checking
 */

type FinalShape = Circle | Square;

function getAreaFinal2(shape: FinalShape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// Adding new member to FinalShape union
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type FinalShape2 = Circle | Square | Triangle;

function getAreaFinal3(shape: FinalShape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    // default:
    // const _exhaustiveCheck: never = shape; // Type 'Triangle' is not assignable to type 'never'
    /**
     * This gives error because implementation of union member
     * is still possbile i.e Triangle
     */
    // return _exhaustiveCheck;
  }
}

// Error is gone after implementation
function getAreaFinal4(shape: FinalShape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return shape.sideLength;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
