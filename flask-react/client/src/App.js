import React,{useCallback, useContext, useState} from 'react';
import './App.css';
import Form from './components/form/Form';
import View from  './components/View/View';
import MensagemContext from './store/mensagem-context';

function App() {
  const ctx = useContext(MensagemContext);
  return (
    <React.Fragment>
        <div className='App'>
            <div className="App-main">
                <Form setMensagem={ctx.setMensagem}></Form>
                {/* este de baixo é apenas para visualizar gets  */}
                <View></View>
            </div>
        </div>
    </React.Fragment>
  );
}

export default App;
