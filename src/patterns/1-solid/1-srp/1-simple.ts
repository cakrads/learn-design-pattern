/**
 * Not Use SRP
 * 
 * imagine, if we want to add another Arithmetic Operations,
 * we should add another if so on
 * ex: if (type === "multiply") return a * b;
 * note: this function violate principle SRP and OCP
 * SRP cause many responsibility
 * OCP cause if we want to add new responsible, we should modify the function
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


/**
 * Another Example
 */

// in utils root folder
const utils = {
  calculateSubtotal: (order: any): number => order,
  calculateTax: (subtotal: any): number => subtotal,
  calculateShipping: (order: any): number => order,
};
// in helper root folder
const helper = {
  sendInvoiceEmail: (order: any, totalCost: number) => ({ order, totalCost })
};
// example this in file repository.ts
const repository = {
  saveToDatabase: (order: any, totalCost: number) => ({ order, totalCost }),
};

// example in services/actions/hooks file
// Non SRP
async function handleSubmitOrder_NonSRP(order: any) {
  const subtotal = utils.calculateSubtotal(order);
  const tax = utils.calculateTax(subtotal);
  const shipping = utils.calculateShipping(order);
  const totalCost = subtotal + tax + shipping;
  await repository.saveToDatabase(order, totalCost);
  helper.sendInvoiceEmail(order, totalCost);
}

// SRP
async function handleSubmitOrder_SRP(order: any) {
  const totalCost = calculateTotalCost(order);
  await saveOrder(order, totalCost);
  sendInvoice(order, totalCost);
}

function calculateTotalCost(order: any) {
  const subtotal = utils.calculateSubtotal(order);
  const tax = utils.calculateTax(subtotal);
  const shipping = utils.calculateShipping(order);
  return subtotal + tax + shipping;
}

async function saveOrder(order: any, totalCost: number) {
  return await repository.saveToDatabase(order, totalCost);
}

function sendInvoice(order: any, totalCost: any) {
  helper.sendInvoiceEmail(order, totalCost);
}

export { calculate, add, min, handleSubmitOrder_NonSRP, handleSubmitOrder_SRP };
