const products = [];

class ProductFactory {
  add(name) {
    const product = { id: products.length + 1, name };
    products.push(product);
    return product;
  }

  getAllProducts() {
    return products;
  }

  getProduct(id) {
    const product = products.find((item) => item === id);
    if (!product) {
      return;
    }

    return product;
  }
}

export default ProductFactory;
