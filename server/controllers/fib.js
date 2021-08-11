function calcFib(modificador=1, indice) { // O modificador tem valor 1 inicial para fibonnaci original
    const lista = [modificador, modificador] // Tem q ter um modificador pre declarado, senão a logica do for não roda
    let posicao = 1; // A posicao é onde sera colocado na lista para ter cada número adicionado

    // Cuidado! o for vai MANTER o número da posicao
    for (let _;posicao < indice; posicao++) { // Perceba que o indice tem o +1, isto é dado por não começar com 0 o fibo
        lista[posicao + 1] = lista[posicao] + lista[posicao - 1] ;
    }
    return lista // a posição sempre será o ultimo número
}

export function fib(req, res, next) {
    res.status(404).render('test-page', {
        pageTitle : 'Test page', path : '/test-page',
        fib : calcFib(1,7)
        });
}
