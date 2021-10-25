import React, { useContext } from 'react';
import MensagemContext from '../../store/mensagem-context';
import styles from './FormView.module.css'

const FormView = (props) => {
    const ctx = useContext(MensagemContext);
    return(
        <div className={styles.View}>
            <header className={styles.header}>
                <h3>A mensagem é:</h3>
                <p>{ctx.mensagem}</p>
            </header>
        </div>
    );
}

export default FormView;