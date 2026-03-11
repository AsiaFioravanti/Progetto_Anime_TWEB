const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'anime_db',
  password: 'tua_password', 
  port: 5432,
});

module.exports = pool;