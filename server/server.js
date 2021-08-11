// imports
import express, { urlencoded, static as stat, json } from "express";
import { join } from 'path';
import cors from 'cors';
import path from 'path';
// Routes imports
import { routes } from './routes/admin.js';
import { routes as _routes } from './routes/view-raw.js';
import shop from './routes/shop.js';
import testPage from './routes/test-page.js';
// const rawData = require('./routes/view-raw-data') // DESCONTINUADO

// Controllers imports
import { page404 } from './controllers/error.js';

// Colocando algumas variáveis importantes
const app = express(); // Principal para funcionar o node basicamente
const __dirname = path.resolve(); // Dirname parece Não existir pre definido usando ES6 Import .js, por isso tem q ser definido

// Express main builts
app.use(urlencoded({extended: true})); //body-parser is depracated, use this instead!
app.use(stat(join(__dirname,'public')));
app.use(json());

// View engine (ejs)
app.set('view engine', 'ejs');
app.set('views', './views');

// CORS for HTTP requests
app.use( cors({
    Origin: ['http://localhost:9000', 'http://client:3000'], // O primeiro é para local, o outro container
    credentials: true,
  })); // Origin:'http://localhost:3000' default for react app

// Pages
app.use('/admin', routes);
// app.use(rawData.routes); // DESCONTINUADO
app.use(_routes);
app.use(testPage);
app.use(shop);
app.use(page404);
    
// Server Connections
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("Port connected");
});
