import { createPool } from 'mysql2';
import { mysqlHost, mysqlUser, mysqlPort, mysqlDatabase, mysqlPassword } from '../keys.js';

const pool = createPool({
  host: mysqlHost,
  user: mysqlUser,
  port: mysqlPort,
  database : mysqlDatabase,
  password: mysqlPassword
});

export default pool.promise();