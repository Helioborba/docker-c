import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Form from './components/form/Form'
import Log from  './components/Log/Log'
import MensagemContext from './store/mensagem-context';
function App() {
  // const mensagemReducer = (state,action) => {
  //   if (action.type === "NOVA_MSG") {
  //     return ({mensagem:action.value,data:action.value});
  //   }
  //   return ({mensagem:'',data:''});
  // } 
  const [mensagem,setMensagem] = useState();
  // const [mensagem, dispatchMsg] = useReducer(mensagemReducer,'')
  return (
    <Router>
      <React.Fragment>
        <MensagemContext.Provider value={{
          mensagem: mensagem
        }}>
          <div className='App'>
              <div className="App-main">
                  <Form setMensagem={setMensagem}></Form>
                  {/* este de baixo é apenas para visualizar gets  */}
                  <Log setMensagem={setMensagem}></Log>
              </div>
          </div>
        </MensagemContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
