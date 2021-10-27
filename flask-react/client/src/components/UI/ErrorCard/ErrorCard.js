import React from "react";

const ErrorCard = (props) => {
    return (
        <React.Fragment>
            <h1>Um erro ocorreu durante sua requisição: </h1>
            <h2>Erro {props.status} : {props.message}. </h2>
            <p>Please try again...</p>
        </React.Fragment>
    );
};

export default ErrorCard;