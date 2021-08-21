import Fib from '../models/pg-fib.js'
const numberscal = [0];

function calc(num) {
    return num + 100
}
export async function getRedis(req, res, next) { // pegar todos

}

export async function postPg(req, res, next) { // Precisa de um nome melhor...
    const indice = req.body.indice; // Caso não haja indice, retornar algo com 'internal error' pois não vai haver valor para ser resolvido. erro discreto
    
    // Redis
    if (parseInt(indice) > 40) {
        return res.status(422).send("O número é muito grande!"); // Bloquear de gastar... muito o redis
    }
    
    if (isNaN(parseInt(indice))  || indice === null) {
        res.send({ error: 'Não foi inserido número!'})
    } else {
        // Pg para inserir o resultado
        // const fib = new Fib(indice);
        // fib
        // .save()
        // .catch( (err) => {
        //     console.log(err);
        // })
        numberscal.push(indice)
        res.send({ working: true}); // esta sendo execultado a task
    }

}

export async function getPg(req, res, next) { // Pega todos os valores na linha
    res.send(calc(numberscal.slice(-1)))
    // try {
    //     Fib
    //     .allValues()
    //     .then( (data) => {
    //         res.send(data.rows);
    //     })
    //     .catch((err) => {
    //         console.log("Não existe dados ainda",err)
    //     })
    // } catch (err) {
    //     console.log("Não existe nada na tabela para pegar",err)
    // }
}
