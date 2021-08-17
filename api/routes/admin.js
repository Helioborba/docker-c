import { Router } from 'express';
const router = Router();

// controllers
import { getAddProduct, postAddProduct } from "../controllers/products.js";


// Products
router.get('/add-product', getAddProduct);  
router.post('/add-product', postAddProduct);


export default router;
// const _products = products;
// export { _products as products };