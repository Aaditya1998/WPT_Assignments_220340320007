let db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(db);
let status = false;
let resourcename = "Water";
con.query(
  "update resource set status=? where resourcename=?",
  [status, resourcename],
  (err, res) => {
    if (err) {
      console.log("Error");
    } else {
      if (res.affectedRows === 0) {
        console.log("update failed");
      } else {
        console.log("Update successful");
      }
    }
  }
);
