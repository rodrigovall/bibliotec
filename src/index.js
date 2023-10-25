import express from 'express';
import morgan from 'morgan';
import { router } from './routes.js';
//crea el servidor del apis rest
const app = express();

// setea el puerto que va a escuchar nuestra aplicacion
app.set('port', 3000);

// morgan para poder ver las solicitudes de los clientes
app.use(morgan('dev'));
// interpreta los objetos json de las solicitudes de los clientes que se van enviando
app.use(express.json());

app.use(router);

// indicamos a nuestra aplicacion cual es el puerto (set port, 3000)
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})
