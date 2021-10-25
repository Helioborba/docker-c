import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Form from './components/form/Form';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getAllByText("Enviar");
  expect(linkElement).toBeInTheDocument;
});
// Para rodar este teste, é fundamental que o servidor do Node esteja rodando para acontecer a chamada/ Aqui parece existir um bug com o jest
// test('loads and displays greeting', async () => {
//   render(<Form url="/" />)
//   const button = screen.getByRole('button',{name:"Enviar"})

//   fireEvent.click(button)
  
//   const dados = await screen.findByText('Enviado') // funciona por enquanto
  
//   expect(dados).toBeInTheDocument
  
// })