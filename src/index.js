import pow from "./pow";

console.log("TEST ONE");
pow({ base: 2, exponent: 8 });

console.log("TEST TWO, WITH DEBUG MODE");

pow({ base: 2, exponent: 8, isDebug: true });
