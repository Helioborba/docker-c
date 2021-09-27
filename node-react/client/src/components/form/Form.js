import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    estado: 'Enviar',
    class: 'Form__actions_active'
  };

  // DEPRACATEDDDDDDDDD
  componentDidMount() {
    this.fetchIndexes(); 
  }
  // DEPRACATEDDDDDDDDDd
  

  async fetchIndexes() {
    const mensagem = await axios.get('/api/sistema/get_test');
    console.log(mensagem)
    this.setState({
      seenIndexes: mensagem.indice
    });
  }
  
  handleSubmit = async (event) => {
    event.preventDefault(); 
    
    await axios.post('/api/sistema/post_test', {
      indice: this.state.index,
    }).then((res)=>{
      console.log("todos: ",res.data);
      this.state.estado = "Enviado";
      this.state.class = "Form__actions_inactive";
    }).catch( (err) => {
      console.log(err)
    })

    // bloquear de enviar depois de um envio
    const button = document.querySelector('button');
    button.disabled = true;

    // Essa parte é para checar se funcionou o post //
    // this.state.estado = "Enviado";
    //                  //////                      //

    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    try {
      return this.state.seenIndexes;
    } catch (err){
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
            <div className='Form__controls'>
                <div className='Form__control'>
                    <label>Digite uma mensagem:</label>
                    <input value={this.state.index} onChange={(event) => this.setState({ index: event.target.value })}/>
                </div>
            </div>
            <div className={this.state.class}>
              <button>{this.state.estado}</button>
            </div>
            {/* onClick={(event) => this.setState({ estado: event.target.value })} */}
        </form>
        <div>
            <h3>O valor ao quadrado resulta em:</h3>
            {this.renderSeenIndexes()}
        </div>
      </div>
    );
  }
}

export default Fib;
