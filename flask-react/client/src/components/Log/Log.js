import React, { useState } from 'react';
// import axios from 'axios';
import style from './Log.module.css'
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Log = (props) => {
  const [formValidador,SetFormValidador] = useState(false);

  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  const handleSubmit = (event) => {
    event.preventDefault(); 
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
      <div className={style.div__main}>
          <div className={style.Form__controls} >
              <div className={style.Form__control}>
                  <label>Logue os dados:</label>
                  <Button type='submit' disabled={false}>Logar dados</Button>
              </div>
          </div>
      </div>
    </Card>
  );
}

export default Log;
