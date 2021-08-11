import { Router } from 'express';

import { getShop } from '../controllers/products.js';
const router = Router();

router.get('/', (getShop));

export default router;