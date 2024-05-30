import { Router } from 'express';
import Order from './../models/Orders.js';

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json({ orders: orders });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

export { router as orderRoutes };
