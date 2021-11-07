import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// Material UI
import "@fontsource/roboto";
import'@mui/icons-material/AccessAlarm';
import'@mui/icons-material/ThreeDRotation';

import {MensagemGetContextProvider} from './store/mensagem-get-context';
import {MensagemPostContextProvider} from './store/mensagem-post-context';


ReactDOM.render(
  <React.StrictMode>
    <MensagemGetContextProvider>
      <MensagemPostContextProvider>
        <App />
      </MensagemPostContextProvider>
    </MensagemGetContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
reportWebVitals();