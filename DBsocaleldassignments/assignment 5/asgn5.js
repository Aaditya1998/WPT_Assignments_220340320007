const express = require("express");
const app = express();

const mysql = require("mysql2");

app.use(express.static("sf"));

app.listen(550);

app.get("/getbalance", (req, resp) => {
  console.log("ajax called");
  const db = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "pleasework",
    port: 3306,
  };
  const conn = mysql.createConnection(db);

  let output = { status: false, detail: { acno: 0, bal: "" } };
  let acno = req.query.acno;
  console.log(acno);
  conn.query(
    "select acno, bal from balance where acno = ?",
    [acno],
    (error, rows) => {
      if (error) {
        console.log(error);
      } else {
        if (rows.length > 0) {
          output.status = true;
          output.detail = rows[0];
        } else {
          console.log("No entry with this acno");
        }
      }
      console.log(output);
      resp.send(output);
    }
  );
});
