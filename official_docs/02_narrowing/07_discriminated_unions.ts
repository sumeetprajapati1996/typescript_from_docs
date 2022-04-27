// Discriminated Unions

interface Shape {
  kind: "circle" | "square"; // using this instead of string prevents misspelling
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  // if (shape.kind === 'rect') {
  //   // This condition will always return 'false'
  //   // since the types '"circle" | "square"' and '"rect"' have no overlap.
  // }
}

/**
 * Discrimination example
 */
// 1
function getArea(shape: Shape) {
  // return Math.PI * shape.radius ** 2; // Object is possibly 'undefined' because radius is optional
}
// 2
function getArea2(shape: Shape) {
  if (shape.kind === "circle") {
    // return Math.PI * shape.radius ** 2; // will still give the same error as above
  }
}
// 3
function getArea3(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2; // with ! null checking operator it works
  }
}
/**
 * Here the problem is that the type-checker
 * doesn't know based on Shape kind
 * if the radius or sideLength is assigned or not
 *
 * To deal with this problem lets try different approach
 */
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape2 = Circle | Square;

/**
 * Examples based on thie approach
 */
// 1
function getArea4(shape: Shape2) {
  // return Math.PI * shape.radius ** 2; //Property 'radius' does not exist on type 'Shape2'
  /**
   * Here we get an error because TS doesn't know if
   * the shape is a Circle or Square so property radius
   * will not match with Square
   */
}
// 2
function getArea5(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

/**
 * When every type in a union contains a common property with literal types,
 * TypeScript considers that to be a discriminated union,
 * and can narrow out the members of the union
 */

// Final Area function
function getAreaFinal(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

/**
 * NOTE
 * The important thing here was the encoding of Shape.
 * Communicating the right information to TypeScript
 * that Circle and Square were really two separate types
 * with specific kind fields - was crucial.
 * Doing that let us write type-safe TypeScript code
 * that looks no different than the JavaScript we would’ve written otherwise
 */
