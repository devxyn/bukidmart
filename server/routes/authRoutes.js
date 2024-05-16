import { Router } from 'express';
import { loginController, signUpController } from '../controllers/authController.js';

const router = new Router();

router.post('/signup', signUpController);
router.post('/login', loginController);

export { router as authRoutes };
