const db = require('./_database');

async function insertTable(){
    await db.connect();

    const queryEvento = "INSERT into cidades (nome,estado_id,area) values ($1, $2, $3)"
    await db.query(queryEvento,['Canoas',24, 15]);

    await db.end();
    console.log("cidade cadastrada");
}
//insertTable();

async function dropTable() {
    await db.connect();
    await db.query('delete from cidades where id=1');
    await db.end();
    console.log("Cidade Removida");
 }
 //dropTable()


 async function selectCidade() {
    await db.connect();

    var result = await db.query ("select nome from cidades where id = 3");
    console.log("Nome cidade: ");
    console.log(result.rows);

    var result = await db.query ("select area from cidades where id = 3");
    console.log("Possui área de: ");
    console.log(result.rows);

    await db.end();
 }

//selectCidade()

 async function updateCidade(){
    await db.connect();

    const queryEvento = "update cidades set area= 28 where id = $1";

    await db.query(queryEvento,[7]);
    await db.end();

    
    console.log("Cidade atualizada");
}
updateCidade()