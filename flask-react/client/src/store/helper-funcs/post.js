/**
 * 
 */

/**
 * Utilizado para post com qualquer tipo de dado, retorna uma promise com um JSON
 * @param {string} url 
 * @param {*} data
 */
export async function postData(url, data) {
    const response = fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
    });
    return response; //- RETORNAR O JSON RECEBIDO PELO REQUEST
}