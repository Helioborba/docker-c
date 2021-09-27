import React from "react";
import "./Exibir.css"
import ExibirItem from "./ExibirItems";
function Exibir(props) {

    return(
        <div>
            {props.dados.map((dado) =>  (
                <ExibirItem
                    key={dado.id}
                    nome={dado.nome}
                    idade={dado.idade}
                />
            ))}
        </div>
    );
}

export default Exibir;