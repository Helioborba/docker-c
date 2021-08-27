import { Router } from 'express';
import { getMySql, postMySql } from '../controllers/api-cons.js';


const router = Router();

// Todos os valores guardados
router.get("/todos", getMySql); // GET

router.post('/inserir', postMySql); // POST


export default router;