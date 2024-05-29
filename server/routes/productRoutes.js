import { Router } from 'express';
import { addProduct, getAllProducts, getProduct, modifyProduct } from '../controllers/productController.js';

const router = new Router();

router.post('/add', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.patch('/modify', modifyProduct);

export { router as productRoutes };
