import {useState,useCallback} from "react";

const useHttp = () => {
     // enviar post, needs db
    const [carregamento, setCarregamento] = useState(false); // Manter o status de carregamento
    const [error, setError] = useState(null); // Checar caso haja erro, vai ser removido ao ampliar o redutor.

    const providerDadosHandler = useCallback( async (fetchConfig,processData) => {
        setCarregamento(true);
        setError(null);
        try {
            const res = await fetch(
                fetchConfig.url,{
                    method:fetchConfig.method ? fetchConfig.method : "GET",
                    headers:fetchConfig.headers ? fetchConfig.headers : {},
                    body: fetchConfig.body ? JSON.stringify(fetchConfig.body) : null
                }
            );
            if (!res.ok) {
                const error = new Error("Houve um erro"); 
                error.status = res.status;
                error.message = res.statusText;
                throw error;
            }

            const dados = await res.json();

            // give back the data to the func
            processData(dados);
        } catch (error) {
            setError( {status:error.status,message:error.message} );
            console.log("Mensagem de erro: " + error.message);
        }
        setCarregamento(false);
    },[]);

    return [carregamento,error,providerDadosHandler];
}

export default useHttp;