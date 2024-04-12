const products = [];

class ProductFactory {
  add(name) {
    products.push({ id: products.length + 1, name });
    return products;
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
