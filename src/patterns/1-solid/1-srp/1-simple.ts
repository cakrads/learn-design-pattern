// Not use SRP
function calculate(a: number, b: number, type: string) {
  if (type === "add")
    return a + b;
  if (type === "min")
    return a - b;
  // add add more if we need multiply etc
}
const count1 = calculate(10, 5, "add");
const count2 = calculate(10, 5, "min");
console.log(count1); // 15
console.log(count2); // 5


// Use SRP
function add(a: number, b: number) {
  return a + b;
}

function min(a: number, b: number) {
  return a - b;
}

const count3 = add(10, 5);
const count4 = min(10, 5);
console.log(count3); // 15
console.log(count4); // 5



export { calculate, add, min };