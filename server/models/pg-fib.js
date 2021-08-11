import db from '../connections/pg-con' // Vai pegar o promise criado, depois tem que utilizar return na fib para execultar a tarefa

export default class Fib{
    constructor(input){
        this.input = input
    }

    save() {
        return db.query(
            'INSERT INTO results(numbers) VALUES (?)', [this.input]
        )
    }

    static allValues() {
        return db.query( // faltas o db.results, db a con
            'SELECT numbers FROM results'
        )
    }
}