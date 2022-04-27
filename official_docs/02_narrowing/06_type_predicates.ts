// Type Predicates

/**
 * To define a user-defined type guard,
 * we simply need to define a function
 * whose return type is a type predicate
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

if (isFish(pet)) {
  console.log(pet.swim());
} else {
  console.log(pet.fly());
}

/**
 * Another Example
 */
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isFish);
// or
const underWater2 = zoo.filter(isFish) as Fish[];
// More complex example
const underWater3 = zoo.filter((pet): pet is Fish => {
  if (pet.name == "sharky") return false;
  return isFish(pet);
});
