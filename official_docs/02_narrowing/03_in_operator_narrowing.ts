// in operator narrowing

/**
 * 'in' operator is used to determine
 * if an object has a property with given name
 */
type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };
type Human = { swim?: () => void; fly?: () => void }; // Optional properties

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}
