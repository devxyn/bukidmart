import { Router } from 'express';
import signUpController from '../controllers/signupController.js';

const router = new Router();

router.post('/signup', signUpController);

export default router;
