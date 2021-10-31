import React from 'react';
import './App.css';
import Form from './components/form/Form';
import View from  './components/View/View';

function App() {
  return (
    <React.Fragment>
        <div className='App'>
            <div className="App-main">
                <View></View>
                <Form></Form>
                {/* este de baixo é apenas para visualizar gets  */}
            </div>
        </div>
    </React.Fragment>
  );
}

export default App;
