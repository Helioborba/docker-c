import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Form from './components/form/Form'

function App() {
  return (
    <Router>
      <div className='App'>
          <div className="App-main">
              <Form></Form>
          </div>
      </div>
    </Router>
  );
}

export default App;
