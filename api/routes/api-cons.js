import { Router } from 'express';
import { getPg, getRedis, postPg } from '../controllers/api-cons.js';


const router = Router();

// Todos os valores guardados
router.get("/all", getPg);

// Valor que está guardado no momento
router.get("/current", getRedis)
router.post('/', postPg);

export default router;