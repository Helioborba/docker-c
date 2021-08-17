function calcFib(modificador=1, indice) { // O modificador tem valor 1 inicial para fibonnaci original
    const lista = [modificador, modificador] // Tem q ter um modificador pre declarado, senão a logica do for não roda
    let posicao = 1; // A posicao é onde sera colocado na lista para ter cada número adicionado

    // Cuidado! o for vai MANTER o número da posicao
    for (let _;posicao < indice; posicao++) { // Perceba que o indice tem o +1, isto é dado por não começar com 0 o fibo
        lista[posicao + 1] = lista[posicao] + lista[posicao - 1] ;
    }
    return lista // a posição sempre será o ultimo número
}

function calcFib2(modificador=1, indice) { // O modificador tem valor 1 inicial para fibonacci original
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

export function fib(req, res, next) {
    res.status(404).render('test-page', {
        pageTitle : 'Test page', path : '/test-page',
        fib : calcFib2(1,7)
        });
}
