import Card from '../UI/Card';
import './ItemCardapio.css'



const ItemCardapio = (props) => {
    return (
        <Card className='item-cardapio'>
            <div className='item-cardapio__descricao'>
                <h2>O indice: {props.indice}</h2>
                <h2>tem valor: {props.valor}</h2>
            </div>
        </Card>
    );
}

export default ItemCardapio;