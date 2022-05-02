// Optional parameters in callbacks

/**
 * it’s very easy to make the following mistakes
 * when writing functions that invoke callbacks
 */
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

/**
 * What this actually means is that callback might get invoked with one argument
 */
function myForEach1(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
myForEach1([1, 2, 3], (a, i) => {
  console.log(i.toFixed()); // Error: Object is possibly 'undefined'
});
