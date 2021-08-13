import { Router } from 'express';
import { getPg, getRedis, postRedisAndPg } from '../controllers/api-cons.js';
const router = Router();

// Todos os valores guardados
router.get("/all", getPg);

// Valor que está guardado no momento
router.get("/current", getRedis);

router.post('/', postRedisAndPg);

export default router;