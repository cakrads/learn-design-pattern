class Cinema {
  price: number;

  constructor(price: number) {
    if (this.constructor.name === "Cinema") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }

    this.price = price;
  }

  calculateAdminFee() {
    throw new Error("Method not implemented!");
  }
}

class StandardCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 10) / 100;
  }
}

class DeluxeCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 12) / 100;
  }
}

class PremiumCinema extends Cinema {
  calculateAdminFee() {
    return (this.price * 20) / 100;
  }
}

/**
 * When We have new feature, we create new "extension"
 * with complete method we need without touch another 
 * class like PremiumCinema etc
 */
// class PremiumCinema extends Cinema {
//   calculateAdminFee() {
//     return (this.price * 11) / 100;
//   }
// }


const main = () => {
  const standardCinema = new StandardCinema(100);
  const standardAdminFee = standardCinema.calculateAdminFee();
  console.log(standardAdminFee); // output: 10

  const deluxCinema = new DeluxeCinema(100);
  const deluxAdminFee = deluxCinema.calculateAdminFee();
  console.log(deluxAdminFee); // output: 12

  const premiumCinema = new PremiumCinema(100);
  const premiumAdminFee = premiumCinema.calculateAdminFee();
  console.log(premiumAdminFee); // output: 20

  // const coupleCinema = new CoupleCinema(100);
  // const coupleAdminFee = coupleCinema.calculateAdminFee();
  // console.log(coupleAdminFee); // output: 20
};

export { main };