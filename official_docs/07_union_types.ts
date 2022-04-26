/**
 * Union Types
 */
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(100); // valid
printId("100"); // valid

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`Hello, ${x.join(" and ")}`);
  } else {
    console.log(`Welcome lone traveler, ${x}`);
  }
}
