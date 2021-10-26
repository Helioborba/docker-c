import React,{useState} from 'react';
// import axios from 'axios';
import style from './View.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ViewLog from './ViewLog';

const View = (props) => {
  const [viewDados,setViewDados] = useState([]); // receber get da api
  const [carregamento, setCarregamento] = useState(false);
  // useReducer vai vir a ser util por causa da quantidade de estados sendo utilizados pelo handler (botao/form/component-separado) 
  async function handleView() {
    setCarregamento(true);
    const res = await fetch("/api/mock");
    const dados = await res.json()
    const dadosProntos = dados.cadastros.map( (valores) => {
        return {
          id: valores.id,
          usuario: valores.usuario
        };
      });
    setViewDados(dadosProntos);
    setCarregamento(false)
  };
  // Esta funcao retorna os componentes
  
  const componenteDados = () => { return (viewDados.map( (values) => {
    return (<ViewLog 
      key={values.id}
      usuario={values.usuario}
    />);}))}
  
  return (
    <Card className={style.View}>
        <div className={style.View__controls} >
            <div className={style.View__control}>
                <label>Logue os dados:</label>
                <Button type='submit' disabled={false} onClick={handleView}>Logar dados</Button>
                {!carregamento ? componenteDados() : <p>Loading...</p>}
            </div>
        </div>
    </Card>
  );
}

export default View;
