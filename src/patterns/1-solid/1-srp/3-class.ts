/* eslint-disable @typescript-eslint/no-unused-vars */
// without SRP
export class _Product { }

export class OrderNonSRP {

  addProduct(product: _Product) { /* ... */ }

  deleteProduct(product: _Product) { /* ... */ }

  getProduct() { /* ... */ }

  getTotalProducts() { /* ... */ }

  totalProductsPrice() { /* ... */ }

  printOrder() { /* ... */ }

  showOrder() { /* ... */ }

  getDailyHistory() { /* ... */ }

  getPreviousHistory() { /* ... */ }
}

const _main = () => {
  const order = new OrderNonSRP();
  order.totalProductsPrice();
};

_main();


// with SRP
export class Product { }

export class Order {

  addProduct(product: Product) { /* ... */ }

  deleteProduct(product: Product) { /* ... */ }

  getProduct() { /* ... */ }

  getTotalProducts() { /* ... */ }

  totalProductsPrice() { /* ... */ }

}

export class OrderPreview {

  printOrder(order: Order) { /* ... */ }

  showOrder() { /* ... */ }

}

export class OrderHistory {

  getDailyHistory() { /* ... */ }

  getPreviousHistory() { /* ... */ }
}

const main = () => {
  const product = new Product();
  const order = new Order();
  order.addProduct(product);
  const viewer = new OrderPreview();
  viewer.printOrder(order);
  const history = new OrderHistory();
  history.getDailyHistory();
};

main();