import { Router } from 'express';
import { postTest, getTest, getMySQl, postMySQl } from '../controllers/api-cons.js';


const router = Router();

// Rotas de teste
router.get("/post_test", postTest);
router.get("/get_test", getTest);

// Todos os valores guardados
router.get("/todos", getMySQl); // GET
router.post('/inserir', postMySQl); // POST


export default router;