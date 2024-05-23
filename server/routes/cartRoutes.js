import { Router } from 'express';
import User from '../models/User.js';
import Product from '../models/Product.js';

const router = new Router();

router.put('/add', async (req, res) => {
  const { userID, product, quantity } = req.body;

  try {
    const user = await User.findById(userID);

    user.cart.push({ product, quantity });
    await user.save();
    res.status(201).json({ message: 'Product added to cart!', cart: user.cart });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.get('/:userID', async (req, res) => {
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
});

export { router as cartRoutes };
