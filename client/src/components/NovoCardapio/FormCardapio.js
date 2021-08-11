import { useState} from 'react';
import { fetchCardapio, getCardapio } from '../../scripts/fetch-cardapio';
import './FormCardapio.css'
const FormCardapio = () => {

    // vai pegando o texto ativamente; vai setar os dados que enviar APENAS quando for clicado o submit
    const [alimentoColocado, setarAlimentoColocado] = useState('');

    const AlimentoChangeHandler = (event) => {
        setarAlimentoColocado(event.target.value);
    }
    
    // Pegar o número a cada digitada (mesma ideia como o alimento)
    const [indiceColocado, setarIndiceColocado] = useState('');

    const IndiceChangeHandler = (event) => {
        setarIndiceColocado(event.target.value);
    }
    // Enviar handler
    const [buttonText, mudarEstado] = useState('Adicionar alimento');

    const  EnviarHandler = async (event) => {
        const url1 = "http://server:9000/view-raw/post"
        const url3 = "http://127.0.0.1:5000/request"
        const url2 = "http://localhost:8000/view-raw/post"
        const url4 = "http://localhost:8000/values"
        event.preventDefault();
        const cardapioData = {
            alimento : alimentoColocado, // alimentoColocado
            indice : indiceColocado
        }
        let tentativa = 2
        while (tentativa > 0) {
            try {
                // Caso seja algo?
                if (await getCardapio(cardapioData, url4) === true) {
                    console.log("Localhost")
                    mudarEstado("Enviado")
                    break
                }

                // Caso seja container
                if (await fetchCardapio(cardapioData, url1) === true) {
                    console.log("Container")
                    mudarEstado("Enviado") // QUANDO FUNCIONAR O POST, AI SIM VAI APARECER O ENVIADO!
                    break
                }
                // Caso seja localhost
                if (await fetchCardapio(cardapioData, url2) === true) {
                    console.log("Localhost")
                    mudarEstado("Enviado")
                    break
                }
                if (await fetchCardapio(cardapioData, url3) === true) {
                    console.log("Localhost")
                    mudarEstado("Enviado")
                    break
                }
                // enviar?
            } catch (err) {
                console.log("erro uaio : "+err)
                tentativa -= 1
                await new Promise(res => setTimeout(res, 20000)) 
            } 
            tentativa -= 1
        }
    
        // fetch('/api', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     user: {
        //         name: "John",
        //         email: "john@example.com"
        //     }
        // })
        // })
        // .then(res => res.json())
        // .then((req) => {
        // console.log('this is data', req);
        // })
        // .catch(console.log);
        // handler de erro simples
        console.log("Dados : ",cardapioData)
        setarAlimentoColocado('');
        setarIndiceColocado('');
    }

    return(
        <form onSubmit={EnviarHandler}>
            <div className='novos-cardapio__controls'>
                <div className='novos-cardapio__control'>
                    <label>Alimento</label>
                    <input type='text' value={alimentoColocado} onChange={AlimentoChangeHandler}/>
                </div>
            </div>
            <div className='novos-cardapio__controls'>
                <div className='novos-cardapio__control'>
                    <label>Índice para ser calculado</label>
                    <input type='number' value={indiceColocado} onChange={IndiceChangeHandler}/>
                </div>
            </div>
            <div className='novos-cardapio__actions'>
                <button type="submit">{buttonText}</button> {/* UNIT TESTING */}
            </div>
        </form>
    );
}

export default FormCardapio;