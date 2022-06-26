const url = "";
let db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(db);

console.log("DB working");
