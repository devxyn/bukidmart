import { Router } from 'express';
import { signUp, login, me } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = new Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/me', verifyToken, me);

export default router;
