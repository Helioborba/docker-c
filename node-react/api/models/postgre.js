import db from '../connections/pg-con.js' // Vai pegar o promise criado, depois tem que utilizar return na fib para execultar a tarefa

export default class Fib{
    constructor(indice){
        this.indice = indice
    }

    save() {
        db.query('CREATE TABLE IF NOT EXISTS values (indice INT)')
        try{
            return db.query(
                'INSERT INTO values(indice) VALUES($1) ', [this.indice]
            )
        } catch(err) {
            console.log("erro no insert da query", err) // Este erro geralmente vai ocorrer por causa da promise  do create table não ocorrer antes do return insert
        }
    }

    static allValues() {       
        db.query('CREATE TABLE IF NOT EXISTS values (indice INT)')
        try{
            return db.query( // faltas o db.results, db a con
                'SELECT indice FROM values'
            )
        } catch(err) {
            console.log("erro no select all da query", err)
        }
    }
    
}