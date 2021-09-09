import { Router } from 'express';
import { getMySql, postMySql, postTest, getTest } from '../controllers/api-cons.js';


const router = Router();

// Rotas de teste
router.get("/post_test", postTest);
router.get("/get_test", getTest);

// Todos os valores guardados
router.get("/todos", getMySql); // GET
router.post('/inserir', postMySql); // POST


export default router;