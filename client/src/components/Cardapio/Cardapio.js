import ItemCardapio from './ItemCardapio';
import './Cardapio.css'
import CardapioFiltro from '../CardapioFiltro/CardapioFiltro'
import { useState } from 'react';

const Cardapio = (props) => {
    const [novoFiltro, setNovoFiltro] = useState('Carne');

    const addFiltroHandler = (values) => {
        setNovoFiltro(values)
        console.log(values)
    }
    
    // Criar para cada item um componente
    const items = []
    for (let i = 0; i < props.dados.length; i++) {
        items.push(<ItemCardapio key={i} titulo={props.dados[i].titulo}/>)
    }
    
    return(
    <div className='cardapio'>
        <CardapioFiltro selecionado={novoFiltro} onAddFiltro={addFiltroHandler}/>
        <div className='cardapio-principal'>
            {items}  
        </div>
    </div>
    );
}

export default Cardapio;