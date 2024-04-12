import { Router } from 'express';
import signUpController from '../controllers/signupController.js';
import loginController from '../controllers/loginController.js';

const router = new Router();

router.post('/signup', signUpController);
router.post('/login', loginController);

export default router;
