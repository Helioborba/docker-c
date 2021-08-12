import Cardapio from './components/Cardapio/Cardapio'
import Card from './components/UI/Card'
import NovosCardapio from './components/NovoCardapio/NovosCardapio';
const App = () => {
  // valor do props (apenas um dummy)
  const indicesVistos = [ 
    { indice : 1 },
    { indice : 2 },
    { indice : 3 },
    { indice : 4 },
    { indice : 5 },
    { indice : 6 },
    { indice : 7 },
    { indice : 8 }
  ]
  const valores = [
    { valor : 1 },
    { valor : 2 },
    { valor : 3 },
    { valor : 4 },
    { valor : 5 },
    { valor : 6 },
    { valor : 7 }
  ];
  
  return (
      <Card className='Cardapio'>
        <NovosCardapio/>
        <Cardapio indices={indicesVistos} valores={valores}/>
      </Card> 
  );
}

export default App;
