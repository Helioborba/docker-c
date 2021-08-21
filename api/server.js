// imports
import express, { urlencoded, static as stat, json } from "express";
import { join } from 'path';
import cors from 'cors';
import path from 'path';
// Routes imports
import { routes as routesViewRaw } from './routes/view-raw.js';
import admin from './routes/admin.js';
import shop from './routes/shop.js';
import apiCons from './routes/api-cons.js'; // Também conhecido como endpoints
import testPage from './routes/test-page.js';

// const rawData = require('./routes/view-raw-data') // DESCONTINUADO

// Controllers imports
import { page404 } from './controllers/error.js';

// Colocando algumas variáveis importantes
const app = express(); // Principal para funcionar o node basicamente
const __dirname = path.resolve(); // Dirname parece não existir pré-definido usando ES6 Import .js, por isso tem q ser definido

// Express main builts
app.use(urlencoded({extended: true})); //body-parser está obsoleto, utilizar urlenconded!
app.use(stat(join(__dirname,'public')));
app.use(json());

// View engine (ejs)
app.set('view engine', 'ejs');
app.set('views', './views');

// CORS for HTTP requests
app.use(cors());

// Pages
app.use('/admin', admin);
// app.use(rawData.routes); // DESCONTINUADO
app.use(routesViewRaw);
app.use(testPage);
app.use(shop);
app.use('/values', apiCons);
app.use(page404);

// Conexão básica do servidor
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Port connected");
});
