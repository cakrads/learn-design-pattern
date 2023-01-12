import React from "react";

type TProduct = {
  id: number;
  name: string;
  price: number;
};

const products: TProduct[] = [
  { id: 1, name: "book", price: 10 },
  { id: 2, name: "pencil", price: 5 },
  { id: 3, name: "peb", price: 8 },
];

// Non SRP
function OrderNonSRP() {
  return (
    <div>
      <h3>Here Your Product</h3>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            {product.name} | {product.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export { OrderNonSRP };

// Use SRP
// Create Sprerated Product Component
function Product(product: TProduct) {
  return (
    <>
      {product.name} | {product.price}
    </>
  );
}

function Order() {
  return (
    <div>
      <h3>Here Your Product</h3>
      <div>
        {products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </div>
  );
}

export { Order };
