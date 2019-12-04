const db = require('./_database');

async function insertTable(){
    await db.connect();

    const queryEvento = "INSERT into cidades (nome,cnpj) values ($1, $2)"
    await db.query(queryEvento,['Kbase','155.566.1855']);

    await db.end();
    console.log("Empresa cadastrada");
}
//insertTable();

async function dropTable() {
    await db.connect();
    await db.query('delete from empresa where id=1');
    await db.end();
    console.log("Tabela Removidas");
 }
 //dropTable()


 async function selectEmpresa() {
    await db.connect();

    var result = await db.query ("select nome from empresa where cnpj like '155.566.1855'");
    console.log("Nome empresa: ");
    console.log(result.rows);

    var result = await db.query ("select cnpj from empresa where nome like 'Kbase'");
    console.log("CNPJ empresa: ");
    console.log(result.rows);

    await db.end();
 }

// selectEmpresa()

 async function updateEmpresa(){
    await db.connect();

    const queryEvento = "update empresa set nome= 'Oracle' where nome = $1";

    await db.query(queryEvento,['Kbase']);
    await db.end();

    
    console.log("Empresa atualizada");
}
updateEmpresa()
