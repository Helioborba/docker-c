import React, { useContext, useRef } from 'react';
// import axios from 'axios';
import style from './Form.module.css'
import Card from '../UI/Card/Card';
import FormView from './FormView';
import Button from '../UI/Button/Button';
import MensagemGetContext from '../../store/mensagem-get-context';
import MensagemPostContext from '../../store/mensagem-post-context';
import ErrorCard from '../UI/ErrorCard/ErrorCard';

// esta area esta meio grande.. acho q um reducer pode vir a ser muito util..
// Dois botoes, um form, um view..

const Form = (props) => {
  // Contexts
  const ctxGet = useContext(MensagemGetContext);
  const ctxPost = useContext(MensagemPostContext);

  // Post values
  const useMensagem = useRef();
  const useUsuario = useRef();
  
  // Decorador simples para o sentData
  async function sentDataDecorator(func,args=null) {
    // estes datasend podem ser trocados por loading, eles só servem para FORCAR o componente do get fazer re-render no post
    ctxGet.setDataSend(false);
    await func(args); // Funcao do post/get, com o await!
    ctxGet.setDataSend(true);
  }

  const deleteHandler = (event) => {
    // Enviar o request para delete; ainda nao foi criado um endpoint com delete
    const postData = {
      request_safe: "DELETE_ALL_DATA",
      type: "DELETE"
    }
    // Criar funcao com os dados
    const del = (postData) => { ctxPost.handleSubmit(postData);};
    // Enviar para o wrapper a funcao
    sentDataDecorator(del, postData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      usuario: useUsuario.current.value,
      mensagem: useMensagem.current.value,
      type: "SUBMIT"
    }

    const submit = (postData) => { ctxPost.handleSubmit(postData);};
    sentDataDecorator(submit,postData);
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

  // Criar componente com as informacoes do get
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
            <Button type='submit' disabled={ctxPost.formValidadorSubmit}>{!ctxPost.formValidadorSubmit === true ? 'ENVIAR' : 'ENVIADO'}</Button>
          </div>
      </form>
      <Button type='submit' onClick={deleteHandler} disabled={ctxPost.formValidadorDel}>{!ctxPost.formValidadorDel === true ? 'DELETE' : 'DELETING'}</Button>
      {ctxGet.carregamentoProvider && <p>Loading...</p>}
      {!ctxGet.errorProvider && componenteDados()}
      {!ctxGet.carregamentoProvider && !ctxGet.errorProvider && ctxGet.dadosProvider.length === 0 && <p>Não foi encontrado valor</p>}
      {!ctxGet.carregamentoProvider && ctxGet.errorProvider && <ErrorCard status={ctxGet.errorProvider.status} message={ctxGet.errorProvider.message}></ErrorCard>}
    </Card>
  );
}

export default Form;
