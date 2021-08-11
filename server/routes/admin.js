import { Router } from 'express';
const router = Router();

// controllers
import { getAddProduct, postAddProduct } from "../controllers/products.js";


// Products
const products = [];
router.get('/add-product', getAddProduct);  
router.post('/add-product', postAddProduct);


export const routes = router;
const _products = products;
export { _products as products };