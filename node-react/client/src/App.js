import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Form from './components/form/Form'

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className='App'>
            <div className="App-main">
                <Form></Form>
            </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
