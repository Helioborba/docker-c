import React from "react";
import "./Exibir.css"

function ExibirItem(props) {
    
    return(
        <div>
            <div>
                <p>{props.nome} {props.idade}</p>
            </div>
        </div>
    );
}

export default ExibirItem;