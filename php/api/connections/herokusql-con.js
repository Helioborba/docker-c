import { createPool } from 'mysql2';
import { herokusqlHost, herokusqlUser, herokusqlDatabase, herokusqlPassword } from '../keys.js';

const pool = createPool({
  host: herokusqlHost,
  user: herokusqlUser,
  database: herokusqlDatabase,
  password: herokusqlPassword
});

export default pool.promise();