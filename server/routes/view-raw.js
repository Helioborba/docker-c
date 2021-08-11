import { Router } from 'express';
const router = Router();
let dados = ''; // Utilizado para receber do endpoint os dados para propagar à pagina

router.post("/view-raw/post",  (req, res, next) => { // Pegar o chamado e resolver algo
    console.log(`Call recebida de : ${req.headers.referer}`);
    dados = JSON.stringify(req.headers);
    res.status(201).json({"some":"Dados recebidos!"});
});

router.get('/view-raw', (req, res, next) => {
    res.render('view-raw', {
        pageTitle: 'View Raw', 
        path : '/view-raw',
        dados : dados
    });
});  

export const routes = router;

