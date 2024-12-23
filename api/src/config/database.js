const { Database } = require("sqlite3");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./fish.db";

function createDbConnection() {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    createTable(db);
  });
  console.log("Connection with SQLite has been established");
  return db;
}

function createTable(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS anotacao
        (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        name   VARCHAR(50) NOT NULL,
        conteudo   VARCHAR(100) NOT NULL
        );
  `);
}

  module.exports = createDbConnection()