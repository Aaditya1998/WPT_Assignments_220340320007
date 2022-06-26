let datab = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pleasework",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(datab);
let resourceId = 3;
let resourcename = "Oil";
let status = true;
con.query(
  "insert into resource (resourceId,resourcename,status) values (?,?,?)",
  [resourceId, resourcename, status],
  (err, res) => {
    if (err) {
      console.log("error has occured let us see");
    } else {
      console.log(res.affectedRows);
    }
  }
);
