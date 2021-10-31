// Pacotes
import React,{useState} from "react";
import {postData} from "./helper-funcs/post";
// Criar contexto com os valores para serem utilizados no app
const MensagemPostContext = React.createContext({
    formValidadorSubmit: false,
    formValidadorDel: false,
    handleSubmit: async (value={}) => {}
});

/**
 * Componente com o Contexto para realizar posts 
 * 
 */
export const MensagemPostContextProvider = (props) => {
    // Retornar o componente pronto já com o provider ativo + valores //
    
    const [formValidadorSubmit,setFormValidadorSubmit] = useState(false);
    const [formValidadorDel,setFormValidadorDel] = useState(false)
    // Variaveis sendo recebidas nao estao sendo trocadas pois pode talver ocorrer um erro
    const postHandleSubmit = async (dados = {}) => {
        
        // Objeto contendo os dados para o post
        const postDados = dados;
        Object.values(postDados).forEach(val => { if(val === 'DELETE') {
            setFormValidadorDel(true);
        }});

        Object.values(postDados).forEach(val => { if(val === 'SUBMIT') {
            setFormValidadorSubmit(true);
        }});
        try {
            console.log("data to post: ",postDados);
            const res = await postData('/api/store/mensagem_post',postDados);
            const logRes = await res.text();
            console.log("this is res ",logRes);
            if (!res.ok) {
                // Erro customizado
                const error = new Error("Ocorreu um erro"); 
                error.status = res.status;
                error.message =  res.statusText;
                throw error; // Criar um objeto contendo as informacoes para serem logadas pelo componente ErrorCard
            }; 
            // Vai dizer se a request deu certo, para confirmar
            
        } catch (error) {
            alert("post error");
            console.log("Error message " + error.message);
        }
        setFormValidadorSubmit(false);
        setFormValidadorDel(false);
       
        // await axios.post('/api/sistema/post_test', {
        //   indice: this.state.index,
        // }).then((res) => {
        //   console.log("todos: ",res.data);
        //   this.state.estado = "Enviado";
        //   this.state.class = "Form__actions_inactive";
        // }).catch( (err) => {
        //   console.log(err)
        // })

        // bloquear de enviar depois de um envio
        // const button = document.querySelector('button');
        // button.disabled = true;

        // Essa parte é para checar se funcionou o post //
        // this.state.estado = "Enviado";
        //                  //////                      //
    };
    
    // A resposta Não está sendo processada para JSON!!
    // async function postData(url, data) {
    //     //- Default options are marked with *
    //     const response = await fetch(url, {
    //         method: 'POST', 
    //         mode: 'cors', 
    //         cache: 'no-cache', 
    //         credentials: 'same-origin', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         redirect: 'follow', 
    //         referrerPolicy: 'no-referrer', 
    //         body: JSON.stringify(data)
    //     });
    //     return response; //- RETORNAR O JSON RECEBIDO PELO REQUEST
    // }

    return (
        <MensagemPostContext.Provider value={{
            formValidadorSubmit: formValidadorSubmit,
            formValidadorDel: formValidadorDel,
            handleSubmit: postHandleSubmit
        }}>
            {props.children}
        </MensagemPostContext.Provider>
    )
}

export default MensagemPostContext;