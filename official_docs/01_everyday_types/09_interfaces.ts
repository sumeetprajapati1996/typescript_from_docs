/**
 * Interfaces
 *
 * they are similar to Type Aliases but not the same
 */
interface PointInterface {
  x: number;
  y: number;
}

function printPoints2(pt: PointInterface) {
  console.log(`The coordinates x value is ${pt.x}`);
  console.log(`The coordinates y value is ${pt.y}`);
}
printPoints2({ x: 100, y: 100 });

// Extending interfaces
interface AnimalInterface {
  name: string;
}

interface Dog extends AnimalInterface {
  biscuits: boolean;
}

function getDog(animal: Dog) {
  return animal;
}

const dog = getDog({ name: "Dog", biscuits: true });
console.log(dog.name);
console.log(dog.biscuits);

// Adding new fields to existing interface
class TypeScriptAPI {
  public message: string;

  constructor(msg: string) {
    this.message = msg;
  }

  transpileModule(src: string, obj: object): object {
    return { src: src, obj: obj };
  }
}

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
console.log(window.ts.transpileModule(src, {}));
