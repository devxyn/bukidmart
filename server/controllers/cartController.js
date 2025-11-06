import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Orders.js';
import mongoose from 'mongoose';

export const addToCart = async (req, res) => {
  const user = req.user;

  const { productId, quantity } = req.body;

  if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid product!', success: false });
  }

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: 'Invalid quantity!', success: false });
  }

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(400).json({ message: 'Product not found!', success: false });
    }

    const existingCartItem = user.cart.find((item) => item.product.toString() === productId);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await user.save();
      return res.status(200).json({ message: 'Product added to cart!', data: user.cart, success: true });
    }

    user.cart.push({ product: productId, quantity });
    await user.save();
    return res.status(201).json({ message: 'Product added to cart!', data: user.cart, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const getUserCart = async (req, res) => {
  const user = req.user;

  try {
    const productIDs = user.cart.map((item) => item.product);
    const products = await Product.find({ _id: { $in: productIDs } });

    const cart = user.cart.map((cartItem) => {
      const product = products.find((prod) => prod._id.toString() === cartItem.product.toString());
      return { product, quantity: cartItem.quantity };
    });

    return res.status(200).json({ data: cart, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const checkout = async (req, res) => {
  const { userID, deliveryForm } = req.body;

  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const productIDs = user.cart.map((item) => item.product);
    const foundProducts = await Product.find({ _id: { $in: productIDs } });

    const cart = user.cart.map((cartItem) => {
      const product = foundProducts.find((prod) => prod._id.toString() === cartItem.product.toString());
      if (!product) {
        throw new Error(`Product with ID ${cartItem.product} not found`);
      }
      return { product, quantity: cartItem.quantity };
    });

    const products = cart.map((item) => {
      return {
        product: item.product._id,
        name: item.product.name,
        imageUrl: item.product.imageUrl,
        quantity: item.quantity,
      };
    });

    const total = cart.map((item) => item.product.price * item.quantity).reduce((acc, cur) => acc + cur, 0);
    const order = await Order.create({ user: userID, products, total, address: deliveryForm });

    user.cart = [];
    await user.save();

    res.status(200).json({ message: 'Order placed successfully!', order });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const removeFromCart = async (req, res) => {
  const user = req.user;

  const { productId } = req.body;

  if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid product!', success: false });
  }

  try {
    const cartLength = user.cart.length;
    user.cart = user.cart.filter((item) => item.product.toString() !== productId);

    if (user.cart.length === cartLength) {
      return res.status(404).json({ message: 'Product not found in cart!' });
    }

    await user.save();
    res.status(200).json({ message: 'Product removed from cart!', cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
