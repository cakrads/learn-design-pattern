class Cinema {
  price: number;

  constructor(price: number) {
    this.price = price;
  }
}

class StandardCinema extends Cinema { }

class DeluxeCinema extends Cinema { }

class PremiumCinema extends Cinema { }

// We have new feature
// class CoupleCinema extends Cinema { }


class CinemaCalculations {
  calculateAdminFee(cinema: Cinema) {
    if (cinema instanceof StandardCinema) {
      return (cinema.price * 10) / 100;
    }

    if (cinema instanceof DeluxeCinema) {
      return (cinema.price * 12) / 100;
    }

    if (cinema instanceof PremiumCinema) {
      return (cinema.price * 20) / 100;
    }

    /**
     * We need new line when we have new feature
     * so this CinemaCalculations "closed for modification"
     */
    // if (cinema instanceof CoupleCinema) {
    //   return (cinema.price * 11) / 100;
    // }

    return 0;
  }
}


const main = () => {
  const standardCinema = new StandardCinema(100);
  const standardAdminFee = new CinemaCalculations().calculateAdminFee(standardCinema);
  console.log(standardAdminFee); // output: 10

  const deluxCinema = new DeluxeCinema(100);
  const deluxAdminFee = new CinemaCalculations().calculateAdminFee(deluxCinema);
  console.log(deluxAdminFee); // output: 12

  const premiumCinema = new PremiumCinema(100);
  const premiumAdminFee = new CinemaCalculations().calculateAdminFee(premiumCinema);
  console.log(premiumAdminFee); // output: 20
};

export { main };