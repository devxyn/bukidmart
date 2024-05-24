import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Orders.js';

export const addToCart = async (req, res) => {
  const { userID, product, quantity } = req.body;

  try {
    const user = await User.findById(userID);

    user.cart.push({ product, quantity });
    await user.save();
    res.status(201).json({ message: 'Product added to cart!', cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const getUserCart = async (req, res) => {
  const { userID } = req.params;

  try {
    const user = await User.findById(userID);
    const productIDs = user.cart.map((item) => item.product);
    const products = await Product.find({ _id: { $in: productIDs } });

    const cart = user.cart.map((cartItem) => {
      const product = products.find((prod) => prod._id.toString() === cartItem.product.toString());
      return { product, quantity: cartItem.quantity };
    });

    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const checkout = async (req, res) => {
  const { userID, deliveryForm } = req.body;

  try {
    const user = await User.findById(userID);
    if (!user) res.status(404).json({ message: 'User not found!' });

    const productIDs = user.cart.map((item) => item.product);
    const foundProducts = await Product.find({ _id: { $in: productIDs } });

    const cart = user.cart.map((cartItem) => {
      const product = foundProducts.find((prod) => prod._id.toString() === cartItem.product.toString());
      return { product, quantity: cartItem.quantity };
    });

    const products = cart.map((item) => {
      return { product: item.product._id, quantity: item.quantity };
    });

    const total = cart.map((item) => item.product.price * item.quantity).reduce((acc, cur) => acc + cur, 0);
    const order = await Order.create({ userID, products, total, address: deliveryForm });

    user.cart = [];
    await user.save();

    res.status(200).json({ message: 'Order placed successfully!', order, address: deliveryForm });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
