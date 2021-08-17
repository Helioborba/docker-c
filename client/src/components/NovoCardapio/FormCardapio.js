import { useState} from 'react';
import { fetchPostCardapio, fetchPostIndice } from '../../scripts/fetch-cardapio';
import './FormCardapio.css';
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
        const url1 = "api/view-raw/post";
        const url3 = "api/request";
        const url4 = "api/values"; // Posta de dados

        event.preventDefault();
        const cardapioData = {
            alimento : alimentoColocado, // alimentoColocado
            indice : indiceColocado
        }
        let tentativa = 2
        while (tentativa > 0) {
            try {

                // Basicamente, está parte foi totalmente modificada por utilizar o Nginx 
                // com a mesma função do Elastic load balancing de fazer o tráfego automático.
                // então não é necessário providenciar o localhost etc 


                // Post Correto, utilizado para o projeto do Fib
                if (await fetchPostIndice(cardapioData, url4) === true) {
                    mudarEstado("Enviado");
                    break
                }

                // Esse é o original para outra coisa, deixar em off por enquanto
                if (await fetchPostCardapio(cardapioData, url1) === true) {
                    mudarEstado("Enviado"); // QUANDO FUNCIONAR O POST, AI SIM VAI APARECER O ENVIADO! isso é mais para testes usando a libray de teste 
                    break
                }

                //                                                                          //
                // é possível simplificar isso aqui, se passar como array a url no acima /\ //
                //                                                                          //

                if (await fetchPostCardapio(cardapioData, url3) === true) {
                    mudarEstado("Enviado");
                    break
                }
                // enviar?
            } catch (err) {
                console.log(err);
                tentativa -= 1;
                await new Promise(res => setTimeout(res, 20000)); 
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