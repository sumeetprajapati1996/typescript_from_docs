// Call Signatures

type DescribableFunction = {
  description: string;
  (someArg: number): boolean; 
};

function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description} returned ${fn(2)}`);
}

const doSomeArgs: DescribableFunction = Object.assign(
  (someArg: number) => {
    if (someArg < 5) {
      return true;
    } else {
      return false;
    }
  },
  {
    description: "Some description",
  }
);

doSomething(doSomeArgs);
