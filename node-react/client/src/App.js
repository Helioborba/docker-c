import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Form from './components/form/Form'
import Card from './components/UI/Card'

function App() {
  return (
    <Router>
      <Card>
        <div className="App">
          <div className="App-main">
            <div>
              <Form></Form>
            </div>
          </div>
        </div>
      </Card>
    </Router>
  );
}

export default App;
