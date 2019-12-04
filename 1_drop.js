

const db = require('_./_database')

async function dropTable() {
   await db.conection();
   await db.query('DROP TABLE estados CASCATA')
   await db.query('DROP TABLE cidades CASCATA')
   await db.query('DROP TABLE prefeito CASCATA')
   await db.end();
   console.log("Tabelas Removidas");
}

dropTable()