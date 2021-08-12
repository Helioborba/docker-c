import ItemCardapio from './ItemCardapio';
import './Cardapio.css'

const Cardapio = (props) => {
    
    
    // Criar para cada item um componente
    const items = []
    for (let i = 0; i < props.indices.length; i++) {
        try{
            items.push(<ItemCardapio key={i} indice={props.indices[i].indice} valor={props.valores[i].valor}/>)
        } catch(err) {
            console.log(err)
        }
    }
    
    return(
    <div className='cardapio'>
        <div>
            <h2>Resultados abaixo: </h2>
        </div>
        <div className='cardapio-principal'>
            {items}  
        </div>
    </div>
    );
}

export default Cardapio;