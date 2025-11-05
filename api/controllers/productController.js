import mongoose from 'mongoose';
import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  const { page = 1, limit = 10, featured } = req.query;

  const newPage = parseInt(page) < 1 ? 1 : parseInt(page);
  const newLimit = parseInt(limit) < 1 ? 1 : parseInt(limit);

  try {
    const query = {};
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const total = await Product.countDocuments(query);
    const allProducts = await Product.find(query)
      .skip((newPage - 1) * newLimit)
      .limit(newLimit);

    return res.status(200).json({ data: allProducts, page: newPage, limit: newLimit, total, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const addProduct = async (req, res) => {
  const { name, description, price, stocks, image, category, isFeatured } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      price,
      stocks,
      image,
      category,
      isFeatured,
    });

    return res.status(201).json({ message: 'Product created successfully', data: product, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid product', success: false });
  }

  try {
    const product = await Product.findById(id);

    return res.status(200).json({ data: product, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const modifyProduct = async (req, res) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid product', success: false });
  }
  try {
    const productData = req.body;

    const product = await Product.findByIdAndUpdate(id, productData, { new: true });

    return res.status(200).json({ message: 'Product updated successfully', data: product, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid product', success: false });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: 'Product not found!' });
      return;
    }

    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Product deleted successfully', success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};
