/**
 * Any
 *
 * it's a speical type used whenever
 * you don't want to get any typechecking errors
 *
 * we can run any syntactically legal operation
 * on the variable of type 'any'
 */
let anyVar: any;

// All this will not throw any error
anyVar.foo();
anyVar();
anyVar.bar = 100;
anyVar = "hello";
const n: number = anyVar;
