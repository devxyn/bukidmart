import { Router } from 'express';
import { addToCart, checkout, getUserCart, removeFromCart } from '../controllers/cartController.js';

const router = new Router();

router.put('/add', addToCart);
router.get('/:userID', getUserCart);
router.post('/checkout', checkout);
router.post('/remove', removeFromCart);

export { router as cartRoutes };
