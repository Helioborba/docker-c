import React, { useState } from 'react';
// import axios from 'axios';
import style from './Log.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const Log = (props) => {
  const [logDados,SetlogDados] = useState(false);

  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  const handleLog = (event) => {
    event.preventDefault(); 
    let dados = false;
    fetch("/api/mock")
    .then( (res) => { return res.json(); })
    .then( (res) => { 
      console.log(res); 
      dados = res;
    })
    .catch((err) => { 
      console.log("ocorreu um erro: ",err);
    });
    // await axios.post('/api/sistema/post_test', {
    //   indice: this.state.index,
    // }).then((res)=>{
    //   console.log("todos: ",res.data);
    //   this.state.estado = "Enviado";
    //   this.state.class = "Form__ac tions_inactive";
    // }).catch( (err) => {
    //   console.log(err)
    // })

    // bloquear de enviar depois de um envio
    // const button = document.querySelector('button');
    // button.disabled = true;

    // Essa parte é para checar se funcionou o post //
    // this.state.estado = "Enviado";
    //                  //////                      //
    SetlogDados(dados)
  };

  return (
    <Card className={style.Log}>
        <div className={style.Log__controls} >
            <div className={style.Log__control}>
                <label>Logue os dados:</label>
                <Button type='submit' disabled={false} onClick={handleLog}>Logar dados</Button>
                {logDados ? <p>{logDados}</p> : <p>Nada ainda..</p>}
            </div>
        </div>
    </Card>
  );
}

export default Log;
