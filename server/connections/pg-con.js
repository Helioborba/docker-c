import { Pool } from 'pg' // A mesma coisa que o mysql
import { pgDatabase, pgHost, pgPassword, pgPort, pgUser } from '../keys'
const pool = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort
})

export default pool.promise(); // 