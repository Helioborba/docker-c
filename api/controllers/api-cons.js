export async function postTest(req, res, next) { // Precisa de um nome melhor...
    const indice = req.body.indice
    res.send({ message: 'funcinou'})
}

export async function getTest(req, res, next) { // Precisa de um nome melhor...
    const indice = req.body.indice
    res.send({ indice: '10'})
}


export async function postMySQl(req, res, next) { // Precisa de um nome melhor...
    const gp = req.body.indice
    res.send({ message: 'good'})
    console.log("request:", gp)
}

export async function getMySQl(req, res, next) { // Pega todos os valores na linha
    res.send([{indice: "ho"}])
    // Precisa conectar com uma DB, preferencia mysql
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
