// Construct Signatures

/**
 * these are functions that are invoked with the 'new' keyword
 * because this returns a new object TS refers to these type
 * of functions as 'constructors'
 */
type SomeObject = any;

type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

/**
 * Combining call and construct signatures in same type arbitrarily
 */
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

// call
function fnCall(ctor: CallOrConstruct) {
  return ctor(5);
}
// construct
function fnConstruct(ctor: CallOrConstruct) {
  return new ctor("2022/04/22");
}
