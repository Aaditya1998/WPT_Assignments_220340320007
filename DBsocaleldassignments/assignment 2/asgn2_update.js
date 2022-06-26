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
let category = "Stationary";
let itemno = 3;
con.query(
  "update item set category=? where itemno=?",
  [category, itemno],
  (err, res) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (res.affectedRows === 0) {
        console.log("update failed");
      } else {
        console.log("update suceeded");
      }
    }
  }
);
