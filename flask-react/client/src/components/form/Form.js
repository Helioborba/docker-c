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
  // async fetchIndexes() {
  //   const mensagem = await axios.get('/api/sistema/get_test');
  //   console.log(mensagem)
  //   this.setState({
  //     seenIndexes: mensagem.indice
  //   });
  // }
  
  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const postDados = {
      usuario: useUsuario.current.value,
      mensagem: useMensagem.current.value
    }

    SetFormValidador(true);
    // setTimeout(() => SetFormValidador(false), 2000);
    try {
      const res = await postData('/api/mensagem_post',postDados);
      console.log(res);
      if (!res.ok) {
        // Erro customizado
        const error = new Error("Ocorreu um erro"); 
        error.status = res.status;
        error.message =  res.statusText;
        throw error; // Criar um objeto contendo as informacoes para serem logadas pelo componente ErrorCard
      }; 
      // Vamos checar se o json recebido tem algum valor, senão a função map não será execultada
      
    } catch (error) {
      alert("post error");
      console.log("Error message " + error.message);
    }
    SetFormValidador(false);
    // await axios.post('/api/sistema/post_test', {
    //   indice: this.state.index,
    // }).then((res)=>{
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

  async function postData(url, data) {
    console.log("this is data",data);
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
    return response.json(); //- parses JSON response into native JavaScript objects
  }
  
  // postData('https://example.com/answer', { answer: 42 })
  //   .then(data => {
  //     console.log(data); // JSON data parsed by `data.json()` call
  //   });

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
                  <label>Digite uma mensagem:</label>
                  <input type='text' id='mensagem' ref={useMensagem}/>
                  <label>Digite seu nome de Usuário</label>
                  <input type='text' id='usuario' ref={useUsuario}/>
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
