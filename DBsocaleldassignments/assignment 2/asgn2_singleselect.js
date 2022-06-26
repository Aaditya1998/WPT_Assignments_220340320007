let db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(db);
let itemno = 3;
con.query(
  "select itemno,itemname,price,category from item where itemno=?",
  [itemno],
  (err, rows) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (rows.length > 0) {
        console.log(
          rows[0].itemno +
            " " +
            rows[0].itemname +
            " " +
            rows[0].price +
            " " +
            rows[0].category
        );
      } else {
        console.log("no item found with " + itemno);
      }
    }
  }
);
