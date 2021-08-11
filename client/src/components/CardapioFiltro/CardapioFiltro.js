import { useState } from 'react';
import './CardapioFiltro.css'

const CardapioFiltro = (props) => {
    const [novoFiltro, setNovoFiltro] = useState('Carne');

    const NovoFiltroHandler = (event) => {
        // Deixar com menos repetição de variável longa
        const ValorEvento = event.target.value

        setNovoFiltro(ValorEvento);
        props.onAddFiltro(ValorEvento);
    }

    
    return(
        <div className='cardapio-filtro'>
            <div className='cardapio-filtro__control'>
                <label>Tipo selecionado : {novoFiltro}</label>
                <select value={props.selecionado} onChange={NovoFiltroHandler}>
                    <option type='number' value='Vegetais'>Vegetais</option>
                    <option type='number' value='Outros'>Outros</option>
                    <option type='number' value='Carne'>Carne</option>
                    <option type='number' value='Peixe'>Peixe</option>
                </select>
            </div>
        </div>
    )  
}

export default CardapioFiltro;