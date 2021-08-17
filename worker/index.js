import {redisHost, redisPort} from "./keys.js";
import redis from 'redis';

const redisClient = redis.createClient({ // Iniciar o redis
    host:redisHost,
    port:redisPort,
    retry_strategy: () => 1000
})
const sub = redisClient.duplicate();

function calcFib2(indice) { // O modificador tem valor 1 inicial para fibonacci original
    const modificador=1;
    const lista = [modificador, modificador] // Necessita um modificador pré-declarado, senão a lógica do for não roda
    let posicao = 1; // A posicao é onde sera colocado na lista para ter cada número adicionado
    let result = 0;
    // Cuidado! o for vai MANTER o número da posição
    for (let _;posicao < indice; posicao++) { // Perceba que o índice tem o +1 (ou tinha?), isto é dado por não começar com 0 o fibo
        lista[posicao + 1] = lista[posicao] + lista[posicao - 1] ;
    }

    if (lista > 10 || lista != false) { // Apenas para fazer o Redis gastar tempo
        result = (lista != null) ? lista.slice(indice) : indice; // Ternary ou algo do gênero, (funciona como IF) está sendo utilizado apenas para testar a velocidade de execução do Redis
    }

    
    return result // a posição sempre será o ultimo número
}

function calcFib(indice) { // Cálculo recursivo do fibonacci; este é o método para gastar memória (APENAS PARA TESTE COM O REDIS)
   console.log("I tried")
   return indice + 100; 
}

sub.on("message",(channel, message) => { // Execulta quando chega uma requisição ao redis
    redisClient.hSet('values', message, calcFib(parseInt(message))); // Transforma em Hash
})

sub.subscribe('insert');