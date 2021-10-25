import React, { useRef, useState } from 'react';
// import axios from 'axios';
import style from './Form.module.css'
import Card from '../UI/Card/Card';
import FormView from './FormView';
import Button from '../UI/Button/Button';
const Form = (props) => {
  
  const useMensagem = useRef();
  const [formValidador,SetFormValidador] = useState(false);
  // async fetchIndexes() {
  //   const mensagem = await axios.get('/api/sistema/get_test');
  //   console.log(mensagem)
  //   this.setState({
  //     seenIndexes: mensagem.indice
  //   });
  // }
  
  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.setMensagem(useMensagem.current.value);
    SetFormValidador(true)
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

  return (
    <Card className={style.Form}>
      <form onSubmit={handleSubmit} className={style.Form__main}>
          <div className={style.Form__controls} >
              <div className={style.Form__control}>
                  <label>Digite uma mensagem:</label>
                  <input type='text' id='mensagem' ref={useMensagem}/>
              </div>
          </div>
          <div className={`${style.button}`}>
            <Button type='submit' disabled={formValidador}>{!formValidador === true ? 'ENVIAR' : 'ENVIADO'}</Button>
          </div>
      </form>
      <FormView></FormView>
    </Card>
  );
}

export default Form;
