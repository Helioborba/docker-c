import { Router } from 'express';
import { fib } from '../controllers/fib.js';

const router = Router();

router.get('/test-page', (fib))

export default router;