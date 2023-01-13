/**
 * Not Use SRP
 * 
 * imagine, if we want to add another Arithmetic Operations,
 * we should add another if so on
 * ex: if (type === "multiply") return a * b;
 */
function calculate(a: number, b: number, type: string) {
  if (type === "add")
    return a + b;
  if (type === "min")
    return a - b;
}
const count1 = calculate(10, 5, "add");
const count2 = calculate(10, 5, "min");
console.log(count1); // 15
console.log(count2); // 5


/**
 * Use SRP
 * 
 * Single Responsible Principle teaches us to make one function,
 * should handle one responsibility.
 * The fun add() just only for add 2 numbers.
 * The fun min() just only for min 2 numbers.
 * And if we wand add multiply, just create a function multiply() 
 * which should handle multiply 2 numbers.
 * Besides keeping us focused, 
 * the other benefit is we didn't need to touch another function.  
 */
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