import React, { useContext, useRef } from 'react';
// import axios from 'axios';
import style from './Form.module.css'
import Card from '../UI/Card/Card';
import FormView from './FormView';
import Button from '../UI/Button/Button';
import MensagemGetContext from '../../store/mensagem-get-context';
import MensagemPostContext from '../../store/mensagem-post-context';
import ErrorCard from '../UI/ErrorCard/ErrorCard';


const Form = (props) => {
  // Contexts
  const ctxGet = useContext(MensagemGetContext);
  const ctxPost = useContext(MensagemPostContext);

  // Post values
  const useMensagem = useRef();
  const useUsuario = useRef();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    ctxGet.setDataSend(true)

    const postData = {
      usuario: useUsuario.current.value,
      mensagem: useMensagem.current.value
    }
    await ctxPost.handleSubmit(postData);
    ctxGet.setDataSend("sent");
  }
  // const handleSubmit = async (event,usuario,mensagem) => {
  //   event.preventDefault(); 

  //   //- Objeto contendo os dados para o post
  //   const postDados = {
  //     usuario: useUsuario.current.value,
  //     mensagem: useMensagem.current.value
  //   }

    
  //   SetFormValidador(true);
  //   try {
  //     const res = await postData('/api/store/mensagem_post',postDados);
  //     const logRes = await res.text();
  //     console.log("this is res ",logRes);
  //     if (!res.ok) {
  //       //- Erro customizado
  //       const error = new Error("Ocorreu um erro"); 
  //       error.status = res.status;
  //       error.message =  res.statusText;
  //       throw error; //- Criar um objeto contendo as informacoes para serem logadas pelo componente ErrorCard
  //     }; 
      
  //   } catch (error) {
  //     alert("post error");
  //     console.log("Error message " + error.message);
  //   }
  //   SetFormValidador(false);
  //   // await axios.post('/api/sistema/post_test', {
  //   //   indice: this.state.index,
  //   // }).then((res) => {
  //   //   console.log("todos: ",res.data);
  //   //   this.state.estado = "Enviado";
  //   //   this.state.class = "Form__actions_inactive";
  //   // }).catch( (err) => {
  //   //   console.log(err)
  //   // })

  //   // bloquear de enviar depois de um envio
  //   // const button = document.querySelector('button');
  //   // button.disabled = true;

  //   // Essa parte é para checar se funcionou o post //
  //   // this.state.estado = "Enviado";
  //   //                  //////                      //
  // };
  
  // A resposta Não está sendo processada para JSON!!
  // async function postData(url, data) {
  //   //- Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', 
  //     mode: 'cors', 
  //     cache: 'no-cache', 
  //     credentials: 'same-origin', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     redirect: 'follow', 
  //     referrerPolicy: 'no-referrer', 
  //     body: JSON.stringify(data)
  //   });
  //   return response; //- RETORNAR O JSON RECEBIDO PELO REQUEST
  // }

  const componenteDados = () => { 
    return ( ctxGet.dadosProvider.map( (values) => {
      return ( <FormView 
        key={values.id}
        usuario={values.usuario}
        mensagem={values.mensagem}
        />
      );
    }))
  };

  return (
    <Card className={style.Form}>
      <form onSubmit={handleSubmit} className={style.Form__main}>
          <div className={style.Form__controls}>
              <div className={style.Form__control}>
                  <label>Digite seu nome de Usuário</label>
                  <input type='text' id='usuario' ref={useUsuario}/>
                  <label>Digite uma mensagem:</label>
                  <input type='text' id='mensagem' ref={useMensagem}/>
              </div>
          </div>
          <div className={`${style.button}`}>
            <Button type='submit' disabled={ctxPost.formValidador}>{!ctxPost.formValidador === true ? 'ENVIAR' : 'ENVIADO'}</Button>
          </div>
      </form>
      {!ctxGet.carregamentoProvider && !ctxGet.errorProvider && componenteDados()}
      {!ctxGet.carregamentoProvider && !ctxGet.errorProvider && ctxGet.dadosProvider.length === 0 && <p>Não foi encontrado valor</p>}
      {!ctxGet.carregamentoProvider && ctxGet.errorProvider && <ErrorCard status={ctxGet.errorProvider.status} message={ctxGet.errorProvider.message}></ErrorCard>}
      {ctxGet.carregamentoProvider && <p>Loading...</p>}
    </Card>
  );
}

export default Form;
