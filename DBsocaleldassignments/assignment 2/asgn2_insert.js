const url = "";
let db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
let itemno = 3;
let itemname = "Notebook";
let price = 50;
let category = "book";
const mysql = require("mysql2");
const con = mysql.createConnection(db);
con.query(
  "insert into item (itemno,itemname,price,category) values(?,?,?,?)",
  [itemno, itemname, price, category],
  (err, res1) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      console.log(res1.affectedRows);
    }
  }
);
