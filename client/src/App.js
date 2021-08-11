import Cardapio from './components/Cardapio/Cardapio'
import Card from './components/UI/Card'
import NovosCardapio from './components/NovoCardapio/NovosCardapio';
const App = () => {
  // valor do props (apenas um dummy)
  const cardapio = [
    { titulo : 'Carcaça' },
    { titulo : 'Peito de Frago'},
    { titulo : 'Costela de Porco'},
    { titulo : 'Bisteca de Porco'},
    { titulo : 'Picanha'},
    { titulo : 'Castanha do Pará'},
    { titulo : 'Castanha de Cajú'}
  ];
  return (
      <Card className='Cardapio'>
        <NovosCardapio/>
        <Cardapio dados={cardapio}/>
      </Card> 
  );
}

export default App;
