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

/**
 * Used for TEST API calls
 * Returns true in case there was sucess
 * 
 */
export async function getTestCardapio(data, url) {
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

export async function getIndices(data, url) {
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

