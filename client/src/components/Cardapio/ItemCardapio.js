import Card from '../UI/Card';
import './ItemCardapio.css'



const ItemCardapio = (props) => {
    return (
        <Card className='item-cardapio'>
            <div className='item-cardapio__descricao'>
                <h2>{props.titulo}</h2>
            </div>
        </Card>
    );
}

export default ItemCardapio;