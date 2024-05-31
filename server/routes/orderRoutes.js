import { Router } from 'express';
import Order from './../models/Orders.js';

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

export { router as orderRoutes };
