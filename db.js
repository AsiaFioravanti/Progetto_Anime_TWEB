const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'anime_db',
  password: 'Azzurro3008!', 
  port: 5432,
});

module.exports = pool;
