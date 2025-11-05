import { Router } from 'express';
import { addToCart, checkout, getUserCart, removeFromCart } from '../controllers/cartController.js';
import { verifyToken, isUser } from '../middlewares/authMiddleware.js';

const router = new Router();

router.put('/', verifyToken, isUser, addToCart);
router.get('/', verifyToken, isUser, getUserCart);
router.put('/remove', verifyToken, isUser, removeFromCart);
// router.post('/checkout', verifyToken, checkout);

export default router;
