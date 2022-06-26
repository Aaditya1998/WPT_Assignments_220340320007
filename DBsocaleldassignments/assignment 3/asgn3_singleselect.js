let db = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
let resourceId = 1;
const mysql = require("mysql2");
const con = mysql.createConnection(db);
con.query(
  "select resourceId,resourcename,status from resource where resourceId=?",
  [resourceId],
  (err, rows) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      if (rows.length > 0) {
        console.log(
          rows[0].resourceId + " " + rows[0].resourcename + " " + rows[0].status
        );
      } else {
        console.log("no resource found with " + resourceId);
      }
    }
  }
);
