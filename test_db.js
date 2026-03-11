const pool = require('./db');

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connessione al Database riuscita! Data attuale:', res.rows[0].now);
  } catch (err) {
    console.error('Errore di connessione:', err.message);
  } finally {
    pool.end();
  }
}

testConnection();