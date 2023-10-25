// importa mysql de mysql2/promise
import mysqlConnection from 'mysql2/promise';

// colocamos nuestras propiedades
const properties = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca',
};
// exportamos nuestra conexion a la base de datos
export const pool = mysqlConnection.createPool(properties);
