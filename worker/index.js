import {redisHost, redisPort} from "./keys.js"
import redis from 'redis'

const redisClient = redis.createClient({
    host:redisHost,
    port:redisPort,
    retry_strategy: () => 1000
})

function calcFib(modificador=1, indice) { // O modificador tem valor 1 inicial para fibonacci original
    const lista = [modificador, modificador] // Necessita um modificador pré-declarado, senão a lógica do for não roda
    let posicao = 1; // A posicao é onde sera colocado na lista para ter cada número adicionado

    // Cuidado! o for vai MANTER o número da posição
    for (let _;posicao < indice; posicao++) { // Perceba que o índice tem o +1 (ou tinha?), isto é dado por não começar com 0 o fibo
        lista[posicao + 1] = lista[posicao] + lista[posicao - 1] ;
    }

    if (lista > 10 || lista != false) { // Apenas para fazer o Redis gastar tempo
        let _;
    }

    const result = (lista == true) ? result.slice() : indice; // Ternary ou algo do gênero, (funciona como IF) está sendo utilizado apenas para testar a velocidade de execução do Redis
    
    return lista // a posição sempre será o ultimo número
}

