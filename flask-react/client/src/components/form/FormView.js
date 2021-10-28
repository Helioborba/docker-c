import React from 'react';
import styles from './FormView.module.css'

const FormView = (props) => {
    return(
        <div className={styles.View}>
            <header className={styles.header}>
                <h3>O Usuário {props.usuario} postou:</h3>
                <p>{props.mensagem}</p>
            </header>
        </div>
    );
}

export default FormView;