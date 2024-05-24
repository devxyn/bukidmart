import { Router } from 'express';
import { addToCart, checkout, getUserCart } from '../controllers/cartController.js';

const router = new Router();

router.put('/add', addToCart);
router.get('/:userID', getUserCart);
router.post('/checkout', checkout);

export { router as cartRoutes };
