
import React from 'react';

/**
 * Context carregando a mensagem e futuros valores da comunicacao com a API.
 * 
 */
const MensagemContext = React.createContext({
    mensagem: ""
});

export default MensagemContext;
