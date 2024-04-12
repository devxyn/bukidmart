import ProductFactory from '../factory/productFactory.js';
const productFactory = new ProductFactory();

export const addProduct = (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      res.status(500).json({ message: 'Invalid product!' });
      return;
    }
    const product = productFactory.add(name);

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Invalid error!' });
  }
};

export const getAllProducts = (req, res) => {
  try {
    const allProducts = productFactory.getAllProducts();
    res.status(200).json({ products: allProducts });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error!' });
  }
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  try {
    const product = productFactory.getProduct(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: 'Invalid product!' });
  }
};
