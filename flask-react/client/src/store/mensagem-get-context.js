
import React, {useState,useEffect} from 'react';
import useHttp from '../components/hooks/use-http';

/**
 * Context carregando a comunicacao com a API.
 * 
 */
const MensagemGetContext = React.createContext({
    dadosProvider: [],
    errorProvider: null,
    carregamentoProvider: false,
    providerDadosHandler: async () => {},
    setDataSend: ""
});

export const MensagemGetContextProvider = (props) => {
    const [dadosProvider,setDadosProvider] = useState([]); // enviar post, needs db
    const [dataSent, setDataSend] = useState(false) // Apenas para checar caso o post foi efetuado

    const [carregamento,error,providerDadosHandler] = useHttp();
    
    useEffect( () => {
        const identifier = setTimeout( () => {
            const setDados = ( (dados) => {
                if (Object.keys(dados).length > 0) {
                    const dadosProntos = dados.map( (valores) => {
                        return {
                            usuario: valores.usuario,
                            mensagem: valores.mensagem,
                            id: valores.id
                        };
                    });
                    setDadosProvider(dadosProntos);
                } else {
                    // ESSE ELSE É Essencial para o re-render do get APÓS delete
                    setDadosProvider([])
                }
            })
            const configGet = {
                url:'/api/store/mensagem_get'
            }
            providerDadosHandler(configGet,setDados);
        }, 100);

        return () => {
            clearTimeout(identifier);
        };
    },[dataSent,providerDadosHandler]);

    return(
        <MensagemGetContext.Provider value={{
            dadosProvider: dadosProvider,
            errorProvider: error,
            carregamentoProvider: carregamento,
            providerDadosHandler: providerDadosHandler,
            setDataSend: setDataSend
        }}>
        {props.children}
        </MensagemGetContext.Provider>
    )
}

export default MensagemGetContext;
