import db from '../connections/pg-con.js' // Vai pegar o promise criado, depois tem que utilizar return na fib para execultar a tarefa

export default class Fib{
    constructor(indice){
        this.indice = indice
    }

    save() {
        try{
            return db.query(
                'INSERT INTO results(numbers) VALUES (?)', [this.indice]
            )
        }
        catch(err) {
            console.log("erro no insert da query",err)
        }
    }

    static allValues() {
        return db.query( // faltas o db.results, db a con
            'SELECT numbers FROM results'
        )
    }
}