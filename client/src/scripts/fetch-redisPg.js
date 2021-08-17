import { fetchGetIndice, fetchGetValor } from './fetch-cardapio';

// Todas as endpoints em arrays para facilitar a vizualização
const urlGetIndice = ["/api/values/all"]
const urlGetValor = ["/api/values/current"];

// Indice
/**
 * Retorna um array com os indices
 * 
 */
export async function getIndice() {
    let tentativa = 3
    while (tentativa > 0) {
        try {
            // Post Correto
            for (let url of urlGetIndice) {
                if (await fetchGetIndice(url,true) === true) {
                    console.log("Indices recebidos do Postgres");
                    return fetchGetIndice(url,false)
                }
            }
        } catch (err) {
            console.log(err);
            tentativa -= 1;
            await new Promise(res => setTimeout(res, 20000)); 
        }
        tentativa -= 1
    }
}

// Valor
/**
 * Retorna um array com os valores
 * 
 */
export async function getValor() {
    let tentativa = 3
    while (tentativa > 0) {
        try {
            // Post Correto
            for (let url of urlGetValor) {
                if (await fetchGetValor(url,true) === true) {
                    console.log("Valores recebidos do Redis");
                    return fetchGetValor(url,false);
                }
            }
        } catch (err) {
            console.log(err);
            tentativa -= 1;
            await new Promise(res => setTimeout(res, 20000)); 
        }
        tentativa -= 1
    }
}