import { Router } from 'express';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  modifyProduct,
} from '../controllers/productController.js';

const router = new Router();

router.get('/', getAllProducts);
router.post('/', verifyToken, isAdmin, addProduct);
router.get('/:id', getProduct);
router.put('/:id', verifyToken, isAdmin, modifyProduct);
router.delete('/:id', verifyToken, isAdmin, deleteProduct);

export default router;
