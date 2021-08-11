import {redisHost, redisPort} from "./keys.js"
import redis from 'redis'

const redisClient = redis.createClient({ // Iniciar o redis
    host:redisHost,
    port:redisPort,
    retry_strategy: () => 1000
})
const sub = redisClient.duplicate();

function calcFib(indice) { // Calculo recursivo do fibonacci; este é o metodo para gastar memória (APENAS PARA TESTE COM O REDIS)
   if (indice < 2) return 1;
   return calcFib(indice - 1) + calcFib(indice - 2); 
}

sub.on("message",(channel, message) => { // Execulta quando chega uma requisição ao redis
    redisClient.hset('values', message, calcFib(parseInt(message))) // Transforma em Hash
})
sub.subscribe('insert')