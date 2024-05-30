import { Router } from 'express';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  modifyProduct,
} from '../controllers/productController.js';

const router = new Router();

router.post('/add', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.patch('/modify', modifyProduct);
router.delete('/delete/:id', deleteProduct);

export { router as productRoutes };
