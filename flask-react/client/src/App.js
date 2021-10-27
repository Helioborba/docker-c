import React,{useState} from 'react';
import './App.css';
import Form from './components/form/Form'
import View from  './components/View/View'
import MensagemContext from './store/mensagem-context';
function App() {
  // const mensagemReducer = (state,action) => {
  //   if (action.type === "NOVA_MSG") {
  //     return ({mensagem:action.value,data:action.value});
  //   }
  //   return ({mensagem:'',data:''});
  // } 
  const [mensagem,setMensagem] = useState(); // enviar post, needs db
  
  // const [mensagem, dispatchMsg] = useReducer(mensagemReducer,'')
  
  return (
    <React.Fragment>
      <MensagemContext.Provider value={{
        mensagem: mensagem
      }}>
        <div className='App'>
            <div className="App-main">
                <Form setMensagem={setMensagem}></Form>
                {/* este de baixo é apenas para visualizar gets  */}
                <View></View>
            </div>
        </div>
      </MensagemContext.Provider>
    </React.Fragment>
  );
}

export default App;
