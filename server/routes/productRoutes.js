import { Router } from 'express';
import { addProduct, getAllProducts, getProduct } from '../controllers/productController.js';

const router = new Router();

router.post('/add', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);

export default router;
