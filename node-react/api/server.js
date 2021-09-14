// imports
import express, { urlencoded, static as stat, json } from "express";
import { join } from 'path';
import cors from 'cors';
import path from 'path';

// Rotas (API-Endpoints)
import apiCons from './routes/api-cons.js'; // Também conhecido como endpoints

// Controlador de error404
import { page404 } from './controllers/error.js';

// Colocando algumas variáveis importantes
const app = express(); // Principal para funcionar o node basicamente
const __dirname = path.resolve(); // Dirname parece não existir pré-definido usando ES6 Import .js, por isso tem q ser definido

// Express
app.use(urlencoded({extended: true})); //body-parser está obsoleto, utilizar urlenconded!
app.use(stat(join(__dirname,'public')));
app.use(json());


// CORS para HTTP request não terem erro
app.use(cors());

// Endpoint e handler de erro 404
app.use('/sistema', apiCons);
app.use(page404);

// Conexão básica do servidor
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Port online");
});
