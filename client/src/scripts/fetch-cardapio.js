/**
 * Used for API calls
 * Returns true in case there was sucess
 * 
 */
export async function fetchCardapio(data, url) {
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

export async function getCardapio(data, url) {
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

// Original em baixo
// export function fetchCardapio(data) {
//     console.log(`data : ${data}`)
//     fetch('http://localhost:8000/view-raw/post', {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             "host": "http://localhost:9000/"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then((req) => {
//         console.log('this is data', req);
//         return true
//     })
//     .catch(console.log);
//     return false
// }
