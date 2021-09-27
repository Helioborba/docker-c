import React from 'react';
import axios from 'axios';
import './Form.css'

function Form() {
  const state = {
    seenIndexes: [],
    values: {},
    index: '',
    estado: 'Enviar',
    class: 'Form__actions_active'
  };

  async function fetchIndexes() {
    const mensagem = await axios.get('/api/sistema/get_test');
    console.log(mensagem);
    this.setState({
      seenIndexes: mensagem.indice
    });
  }
  
  async function handleSubmit(event) {
    event.preventDefault(); 
    
    await axios.post('/api/sistema/post_test', {
      indice: state.index,
    }).then((res)=>{
      console.log("todos: ",res.data);
      state.estado = "Enviado";
      state.class = "Form__actions_inactive";
    }).catch( (err) => {
      console.log(err)
    })

    // bloquear de enviar depois de um envio
    const button = document.querySelector('button');
    button.disabled = true;

    // Essa parte é para checar se funcionou o post //
    // this.state.estado = "Enviado";
    //                  //////                      //

  };
 
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
          <div className='Form__controls'>
              <div className='Form__control'>
                  <label>Digite uma mensagem:</label>
                  <input type='text' id='mensagem' ref={""} />
              </div>
          </div>
          <div className="Form__actions_active">
            {/* <button>{estado}</button> */}
            <button>Enviar</button>
          </div>
      </form>
      <div>
          <h3>O valor ao quadrado resulta em:</h3>
          <p>colocar valor...</p>
      </div>
    </div>
  );
}

export default Form;
