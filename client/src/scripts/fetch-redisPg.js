import { fetchGetIndice, fetchGetValor } from './fetch-cardapio';

// Todas as endpoints em arrays para facilitar a vizualização
const urlGetIndice = []
const urlGetValor = ["http://localhost:8000/values/all",];

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
                    console.log("Localhost");
                    mudarEstado("Enviado");
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
                if (await fetchGetIndice(url,true) === true) {
                    console.log("Localhost");
                    mudarEstado("Enviado");
                    return fetchGetIndice(url,false);
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