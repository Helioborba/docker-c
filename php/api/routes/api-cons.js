import { Router } from 'express';
import { getHerokuSql, postHerokuSql } from '../controllers/api-cons.js';


const router = Router();

// Todos os valores guardados
router.get("/todos", getHerokuSql); // GET

router.post('/inserir', postHerokuSql); // POST


export default router;