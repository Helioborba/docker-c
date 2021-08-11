import Fib from '../models/pg-fib.js'
import redis from 'redis'
import { redisHost, redisPort } from "../keys.js";

// Config do Redis
const redisClient = redis.createClient({
    host: redisHost,
    port: redisPort,
    retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate() // Parece que o Redis necessita disso, pois ele não consegue fazer handler de dois server ou algo do gênero
  
export function getRedis(req, res, next) { // serve para pegar todos os valores calculados pelo redis
    redisClient.hgetall('values', (err, values) => { 
        if(err) {
            console.log(err);
        }
        res.send(values);
    })
}

export function postRedisAndPg(req, res, next) { // Precisa de um nome melhor...
    const indice = req.body.indice; // Caso não haja indice, retornar algo com 'internal error' pois não vai haver valor para ser resolvido. erro discreto
    
    // Redis
    if (parseInt(indice) > 40) {
        return res.status(422).send("O número é muito grande!"); // Bloquear de gastar... muito o redis
    }
    
    if (isNaN(parseInt(indice))  || indice === null) {
        res.send({ error: 'Não foi inserido número!'})
    } else {
        redisClient.hSet('values', indice, "Ainda não há nada");
        redisClient.publish('insert',indice); // Execultado o trabalho de checagem do Fib
        
        // Pg para inserir o resultado
        const fib = new Fib(indice);
        fib
        .save()
        .then( (res) => {
            console.log(res);
        })
        .catch( (err) => {
            console.log(err);
        })
        res.send({ working: true}); // esta sendo execultado a task
    }
    
}

export function getPg(req, res, next) { // Pega todos os valores na linha
    Fib
    .allValues()
    .then( ([data]) => {
        res.send(data.rows);
    })
}
