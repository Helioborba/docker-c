import './App.css';
import React from 'react';
import Form from './components/Form/Form'
// import Exibir from './components/Exibir/Exibir';

function App() {
  const dados = [
    {
      id: "1",
      nome: "Francisco",
      idade: "14"
    },
    {
      id: "2",
      nome: "Antonio",
      idade: "24"
    },
    {
      id: "3",
      nome: "Augusto",
      idade: "34"
    },
    {
      id: "4",
      nome: "Roberto",
      idade: "44"
    }
  ]
  return (
    <div className='App'>
      <div className="App-main">
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
