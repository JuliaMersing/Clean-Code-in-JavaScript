class ProductStorage {
  constructor() {
    this.products = [];
  }

  get lenght() {
    return this.products.length;
  }

  //product is an instance of Product and any derived classes
  store(product) {
    this.products.push(product);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  //Adds items to the store of products and returns the total number of products after insertion
  save(storage) {
    storage.store({ name: this.name, price: this.price });
    return storage.lenght;
  }
}

class DiscountProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  save(storage) {
    let discounted = {
      name: this.name,
      price: this.price - this.price * this.discount,
    };
    storage.store(discounted);
    //return discounted; Violates LSP
    return storage.lenght; // The save method return the number of product inserted
  }
}

let products = [
  { name: "ProductA", price: 28.9 },
  { name: "ProductB", price: 68.9 },
  { name: "ProductC", price: 28.9, discount: 0.2 },
];

function insertAll(products) {
  let storage = new ProductStorage();
  for (let p of products) {
    let product;
    if (p.discount) {
      product = new DiscountProduct(p.name, p.price, p.discount);
    } else {
      product = new Product(p.name, p.price);
    }
    let count = product.save(storage);
    console.log(`Product insterted. ${count} product in total`);
  }
}

insertAll(products);
