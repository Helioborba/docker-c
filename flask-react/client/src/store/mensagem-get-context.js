
import React, {useState,useEffect,useCallback} from 'react';
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
    const [carregamento, setCarregamento] = useState(false); // Manter o status de carregamento
    const [error, setError] = useState(null); // Checar caso haja erro, vai ser removido ao ampliar o redutor.
    const [dataSent, setDataSend] = useState(false) // Apenas para checar caso o post foi efetuado

    const providerDadosHandler = useCallback(async (event) => {

        setCarregamento(true);
        setError(null);

        

        try {
            const res = await fetch('/api/store/mensagem_get');
            if (!res.ok) {
                const error = new Error("Houve um erro"); 
                error.status = res.status;
                error.message = res.statusText;
                throw error;
            }
            const dados = await res.json();
            
            if (Object.keys(dados).length > 0) {
                const dadosProntos = dados.map( (valores) => {
                    return {
                        usuario: valores.usuario,
                        mensagem: valores.mensagem,
                        id: valores.id
                    };
                });
                setDadosProvider(dadosProntos);
            }
        } catch (error) {
            setError( {status:error.status,message:error.message} );
            console.log("Mensagem de erro: " + error.message);
        }
        setCarregamento(false);
    },[]);

    useEffect( () => {
        const identifier = setTimeout( () => {
        // esse if é apenas para não rodar pela primeira vez todos os botões
        providerDadosHandler();
        }, 100);

        return () => {
            clearTimeout(identifier);
        };
    },[providerDadosHandler,dataSent]);

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
