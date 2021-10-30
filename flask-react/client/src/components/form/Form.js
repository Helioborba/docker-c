import React, { useContext, useRef, useState } from 'react';
// import axios from 'axios';
import style from './Form.module.css'
import Card from '../UI/Card/Card';
import FormView from './FormView';
import Button from '../UI/Button/Button';
import MensagemContext from '../../store/mensagem-context';
import ErrorCard from '../UI/ErrorCard/ErrorCard';

const Form = (props) => {
  const ctx = useContext(MensagemContext);

  const useMensagem = useRef();
  const useUsuario = useRef();
  const [formValidador,SetFormValidador] = useState(false);
   
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    // Objeto contendo os dados para o post
    const postDados = {
      usuario: useUsuario.current.value,
      mensagem: useMensagem.current.value
    }

    // 
    SetFormValidador(true);
    try {
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
      
    } catch (error) {
      alert("post error");
      console.log("Error message " + error.message);
    }
    SetFormValidador(false);
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
  async function postData(url, data) {
    //- Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return response; //- RETORNAR O JSON RECEBIDO PELO REQUEST
  }

  const componenteDados = () => { 
    return ( ctx.dadosProvider.map( (values) => {
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
            <Button type='submit' disabled={formValidador}>{!formValidador === true ? 'ENVIAR' : 'ENVIADO'}</Button>
          </div>
      </form>
      {!ctx.carregamentoProvider && !ctx.errorProvider && componenteDados()}
      {!ctx.carregamentoProvider && !ctx.errorProvider && ctx.dadosProvider.length === 0 && <p>Não foi encontrado valor</p>}
      {!ctx.carregamentoProvider && ctx.errorProvider && <ErrorCard status={ctx.errorProvider.status} message={ctx.errorProvider.message}></ErrorCard>}
      {ctx.carregamentoProvider && <p>Loading...</p>}
    </Card>
  );
}

export default Form;
