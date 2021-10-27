import React,{useState,useReducer, useEffect} from 'react';
// import axios from 'axios';
import style from './View.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ViewLog from './ViewLog';
import ErrorCard from '../UI/ErrorCard/ErrorCard';

// Redutor
function logReducer(state,action) {
  if (action.type === "USER_CLICK") {
    console.log("changed")
    return {value:action.val};
  };
  return {value:null};
}

const View = (props) => {
  const [viewDados,setViewDados] = useState([]); // receber get da api
  const [carregamento, setCarregamento] = useState(false); // Manter o status de carregamento
  const [error, setError] = useState(null); // Checar caso haja erro, vai ser removido ao ampliar o redutor.
  const [log, dispatchLog] = useReducer(logReducer,{
    value:null
    }); // Log vai se tornar o error handler/carregamento

  const {value:logVal} = log // colocar um ponteiro no valor que queremos

  useEffect( () => {
      const identifier = setTimeout( () => {
        // esse if é apenas para não rodar pela primeira vez todos os botões
        if(logVal != null){
          fetchData(logVal)
          .then( (fetchResolve) => { 
            setViewDados(fetchResolve)})
          .catch( (err) => {
            console.log("Erro no fetch" + err);
          });
        }
      }, 100);

    return () => {
      clearTimeout(identifier);
    }
  },[log])

  const handleDados = ()  => {  
    dispatchLog({type:"USER_CLICK",val:"/api/mock"});
    // O setCarregamento vai sumir quando o reducer controlar todos os estados do app.
    // nao é necessário de qualquer forma esses varios carregamentos, só estão aqui para não ser renderizado o "não foi encontrado valor no momento" de forma errado.
    setCarregamento(true); // Começar a carregar 
  }

  const handleErro = () => {  
    dispatchLog({type:"USER_CLICK",val:"/api/mock_err"});
    setCarregamento(true); // Começar a carregar
  }

  const handleNada = () => {  
    dispatchLog({type:"USER_CLICK",val:"/api/mock_no_value"});
    setCarregamento(true); // Começar a carregar
  }

  // Esta funcao retorna os componentes
  const componenteDados = () => { 
    return ( viewDados.map( (values) => {
      return ( <ViewLog 
        key={values.id}
        usuario={values.usuario}
        />
      );
    }))
  };

  async function fetchData(url) {
    setError(false); // Remover os erros prévios para iniciar o fetch
    let dadosProntos = [];
    try {
      const res = await fetch(url);
      if (!res.ok) {
        // Erro customizado
        const error = new Error("There is an error in the response from the service"); 
        error.status = res.status;
        error.message =  res.statusText;
        throw error; // Criar um objeto contendo as informacoes para serem logadas pelo componente ErrorCard
      };
      const dados = await res.json();

      // Vamos checar se o json recebido tem algum valor, senão a função map não será execultada
      if (Object.keys(dados).length > 0) {
          dadosProntos = dados.cadastros.map( (valores) => {
          return {
            id: valores.id,
            usuario: valores.usuario
          };
        });
      }
    } catch (error) {
      setError( {status:error.status,message:error.message} );
      console.log("message" + error.message);
      console.log(error);
    }
    setCarregamento(false);
    return(dadosProntos);
  }

  return (
    <Card className={style.View}>
        <div className={style.View__controls} >
            <div className={style.View__control}>
                <label>Logue os dados:</label>
                <Button type='submit' disabled={false} onClick={handleDados}>Logar dados</Button>
                <Button type='submit' disabled={false} onClick={handleErro}>Logar erro</Button>
                <Button type='submit' disabled={false} onClick={handleNada}>Logar nada</Button>
                {!carregamento && !error && componenteDados()}
                {!carregamento && !error && viewDados.length === 0 && logVal === null && <p></p>}
                {!carregamento && !error && viewDados.length === 0 && logVal != null && <p>Não foi encontrado valor</p>}
                {!carregamento && error && <ErrorCard status={error.status} message={error.message}></ErrorCard>}
                {carregamento && <p>Loading...</p>}
            </div>
        </div>
    </Card>
  );
}

export default View;
