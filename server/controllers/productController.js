import Product from '../models/Product.js';

export const addProduct = async (req, res) => {
  const { name, description, price, stocks, imageUrl, category } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      stocks,
      imageUrl,
      category,
    });

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Invalid error!' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json({ products: allProducts });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error!' });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: 'Invalid product!' });
  }
};

export const modifyProduct = async (req, res) => {
  const { id, name, description, imageUrl, price, stocks, category } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, {
      name,
      description,
      imageUrl,
      price,
      stocks,
      category,
    });

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
