// Pacotes
import React,{useState,useRef} from "react";

// Criar contexto com os valores para serem utilizados no app
const MensagemPostContext = React.createContext({

})

// Retornar o componente pronto já com o provider ativo + valores
export const MensagemPostContextProvider = (props) => {
    





    return (
        <MensagemPostContext.Provider value={{

        }}>
            {props.children}
        </MensagemPostContext.Provider>
    )
}

export default MensagemPostContext;