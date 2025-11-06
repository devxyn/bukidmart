import { Router } from 'express';
import { signUp, login, me } from '../controllers/authController.js';
import { validateLogin, validateSignUp, verifyToken } from '../middlewares/authMiddleware.js';

const router = new Router();

router.post('/signup', validateSignUp, signUp);
router.post('/login', validateLogin, login);
router.get('/me', verifyToken, me);

export default router;
