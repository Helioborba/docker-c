// dados sera setado pela conexao feita com o react, retornando um JSON

export function getRawData(req, res, next) {
    const nome = req.body.nome
    res.render('view-raw', {
        pageTitle: 'View Raw', 
        path : '/view-raw',
        dados : 'esperando envio..' 
    });

}

export function postRawData(req, res, next) {
    const nome = req.body.nome
    res.status(201).json({
        message:'Data has been retrieved',
        data: {nome: nome}
    });   
    console.log(data)
}
