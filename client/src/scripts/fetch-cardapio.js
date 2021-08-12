// Qual o motivo por trás do return boolean? caso haja outras endpoints, o teste vai retornar falso para elas, já que aqui vai ser execultado a passagem de dados direto, então não há motivo de retornar um número
/**
 * Used for universal API calls
 * Returns true in case there was success
 * @param {any} data - Provavelmente vai ser uma string
 * @param {string} url - Url da endpoint
 */
export async function fetchPostCardapio(data, url) {
    // Provavelmente vai ter um erro aqui quando lançar uma URL errada
    try {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "host": "http://localhost:9000/"
                },
                body: JSON.stringify(data)
            });
        
        if (res.ok) {
            const resResult = await res.json();
            console.log('this is the data :', resResult);
            return true;
        }
    } catch (err) {
        console.log(url,":",err);
        return false
    }
}

/**
 * Used for REDIS API post
 * Returns true in case there was success
 * @param {number} data - Tem que ser um número! (no float)
 * @param {string} url - Url da endpoint
 */
export async function fetchPostIndice(data, url) {
    // Provavelmente vai ter um erro aqui quando lançar uma URL errada
    try {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "host": "http://localhost:9000/"
                },
                body: JSON.stringify(data)
            });
        
        if (res.ok) {
            const resResult = await res.json();
            console.log('this is the data :', resResult);
            return true;
        }
    } catch (err) {
        console.log(url,":",err);
        return false
    }
}

/**
 * Used for REDIS API get, Returns a array with the index
 * 
 * @param {string} url - API endpoint URL
 * @param {boolean} check - true for IF, false for return
 * 
 */
 export async function fetchGetIndice(url,check) { // Check vai bloquear a avaliação feita de retornar algo no IF e avisar se deve retornar valor
    // Provavelmente vai ter um erro aqui quando lançar uma URL errada
    try {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "host": "http://localhost:9000/"
                }
            });
        
        if (res.ok && check === true) { // Checa se a conexão pode ser feita
            return true;
        }

        if (res.ok) {
            const resResult = await res.json();
            console.log('this is the data :', resResult);
            return [resResult];
        }
    } catch (err) {
        console.log(url,":",err);
        return false
    }
}

/**
 * Used for REDIS API get, Returns a array with the values
 * 
 * @param {string} url - API endpoint URL
 * @param {boolean} check - true for IF, false for return
 * 
 */
export async function fetchGetValor(url,check) {
    // Provavelmente vai ter um erro aqui quando lançar uma URL errada
    try {
        const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "host": "http://localhost:9000/"
                }
            });
            
        if (res.ok && check === true) { // Checa se a conexão pode ser feita
            return true;
        }

        if (res.ok) {
            const resResult = await res.json();
            console.log('this is the data :', resResult);
            return [resResult];
        }
    } catch (err) {
        console.log(url,":",err);
        return false
    }
}