// Literal Interface

/**
 * In this initialized const object
 * TS assumes that the value of property counter might change later
 * const object's structure is fixed but props are mutable
 * So instead of 0 TS excects the value of 'counter' to be of type number
 */
const obj = {
  counter: 0,
};
if (true) {
  obj.counter = 1; // Valid
  // obj.counter = "hello"; // Invalid
}

// For strings
function handleRequest(url: string, method: "GET" | "POST") {
  // ...
}
const req = { url: "https://example.com", method: "GET" };
// Error: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
// handleRequest(req.url, req.method);
// This is because prop 'method' mutable so it is inferred as string
// This creates a mismatch of interface structure of const req object and the expected argument literal

/**
 * Work around to this problem
 */
// 1: Changing the Interface by adding a type assertion to either locations
const req1 = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req1.url, req1.method); // Works as now "GET" is inferred as literal type "GET"
// OR
const req2 = { url: "https://example.com", method: "GET" };
handleRequest(req2.url, req2.method as "GET");

// 2: Use as const to convert entire object to be type literals
const req3 = { url: "https://example.com", method: "GET" } as const; // Make the props immutable too
handleRequest(req3.url, req3.method);
