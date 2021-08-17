import Cardapio from './components/Cardapio/Cardapio'
import Card from './components/UI/Card'
import NovosCardapio from './components/NovoCardapio/NovosCardapio';
import { getIndice, getValor } from './scripts/fetch-redisPg';
const App = () => {
  // valor do props (apenas um dummy)
  // Colocar aqui as funções
  const indices = getIndice()
  // const indices = [ 
  //   { indice : 1 },
  //   { indice : 2 },
  //   { indice : 3 },
  //   { indice : 4 },
  //   { indice : 5 },
  //   { indice : 6 },
  //   { indice : 7 },
  //   { indice : 8 }
  // ]
  const valores = getValor();
  
  return (
      <Card className='Cardapio'>
        <NovosCardapio/>
        <Cardapio indices={indices} valores={valores}/>
      </Card> 
  );
}

export default App;
