import { Router } from 'express';
import { getPg, getRedis } from '../controllers/api-cons.js';
const router = Router();

// Todos os valores guardados
router.get("/values/all", getPg)

// Valor que está guardado no momento
router.get("/values/current", getRedis)

router.post('/values', )
export default router;