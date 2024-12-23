function listar(db, res) {
    try{
        db.all("SELECT ID, name, conteudo FROM anotacao", [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });   
    }catch(ex){
        throw ex;
    }
}
function inserir(db, dados, res){
    try{
        const stmt = db.prepare("INSERT INTO anotacao (name, conteudo) VALUES (?,?)");
        stmt.run([dados.name, dados.conteudo])
        stmt.finalize();
        res.send({"status": "OK"});
    }catch(ex){
        throw ex;
    }
}
function atualizar(db, dados, res){
    try{
        const stmt = db.prepare("update anotacao set name = ?, conteudo = ? where ID = ?");
        stmt.run([dados.name, dados.conteudo, dados.ID])
        stmt.finalize();
        res.send({"status": "OK"});
    }catch(ex){
        throw ex;
    }
}
function excluir(db, id, res){
    try{
        const stmt = db.prepare("delete from anotacao where ID = ?");
        stmt.run([id])
        stmt.finalize();
        res.send({"status": "OK"});
    }catch(ex){
        throw ex;
    }
}
function obterQuantidade(db, res){
    try{
        db.get('SELECT count(*) as qtde FROM anotacao', (err, row) => {
            if (err) {
                console.error(err.message);
                throw err;
            }
            res.send({count: row.qtde});
        });  
    }catch(ex){
        throw ex;
    }
}
function obter(db, id, res) {
    try{
        db.get(`SELECT ID, name, conteudo FROM anotacao where ID = ${id}`, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });   
    }catch(ex){
        throw ex;
    }
}
function filtrar(db, valor , res) {
    try{
        db.all(`SELECT ID, name, conteudo FROM anotacao where name like '%${valor}%'`, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.send(rows);
        });   
    }catch(ex){
        throw ex;
    }
}
module.exports = {
    listar, 
    inserir, 
    atualizar, 
    excluir, 
    obterQuantidade, 
    obter, 
    filtrar
}