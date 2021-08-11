import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import FormCardapio from './components/NovoCardapio/FormCardapio';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByText("Adicionar alimento");
  expect(linkElement).toBeInTheDocument;
});
// Para rodar este teste, é fundamental que o servidor do Node esteja rodando para acontecer a chamada
// test('loads and displays greeting', async () => {
//   render(<FormCardapio url="/" />)
//   const button = screen.getByRole('button',{name:"Adicionar alimento"})

//   fireEvent.click(button)
  
//   const dados = await screen.findByText('Enviado') // funciona por enquanto
  
//   expect(dados).toBeInTheDocument
  

// })
