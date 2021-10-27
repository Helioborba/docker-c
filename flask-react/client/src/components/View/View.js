import React,{useState,useReducer} from 'react';
// import axios from 'axios';
import style from './View.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ViewLog from './ViewLog';
import ErrorCard from '../UI/ErrorCard/ErrorCard';

const logReducer = (state,action) => {
  return {}
}
const View = (props) => {
  const [viewDados,setViewDados] = useState([]); // receber get da api
  const [carregamento, setCarregamento] = useState(false);
  const [error, setError] = useState(null);
  const [log, dispatchLog] = useReducer(logReducer,'')
  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  async function handleView() {
    setCarregamento(true);
    setError(null);
    try {
      const res = await fetch("/api/mock_err");
      if (!res.ok) {
        // Erro customizado
        const error = new Error("There is an error in the response from the service"); 
        error.status = res.status;
        error.message =  res.statusText;
        throw error; // Criar um objeto contendo as informacoes para serem logadas pelo componente ErrorCard
      };

      const dados = await res.json();
      const dadosProntos = dados.cadastros.map( (valores) => {
        return {
          id: valores.id,
          usuario: valores.usuario
        };
      });
      setViewDados(dadosProntos);
    } catch (error) {
      setError( {status:error.status,message:error.message} );
      console.log("message" + error.message);
      console.log(error);
    }
    setCarregamento(false);
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
  
  return (
    <Card className={style.View}>
        <div className={style.View__controls} >
            <div className={style.View__control}>
                <label>Logue os dados:</label>
                <Button type='submit' disabled={false} onClick={handleView}>Logar dados</Button>
                <Button type='submit' disabled={false} onClick={handleView}>Logar erro</Button>
                <Button type='submit' disabled={false} onClick={handleView}>Logar nada</Button>
                {!carregamento && !error && componenteDados()}
                {!carregamento && !error && viewDados.length === 0}
                {!carregamento && error && <ErrorCard status={error.status} message={error.message}></ErrorCard>}
                {carregamento && <p>Loading...</p>}
            </div>
        </div>
    </Card>
  );
}

export default View;
