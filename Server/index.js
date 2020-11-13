const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BCTC2020",
  database: "enrolla_app",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/get", (req, res) => {
//   // const sqlInsert =
//   // "INSERT INTO major (Major_ID, Major_Name, Degree, Degree_Credit) VALUES(4, 'FIN', 'BBA', 124);";
//   const sqlInsert = "SELECT Major_Name from major WHERE Major_ID = 2";
//   db.query(sqlInsert, (err, result) => {
//     res.send(result);
//   });
// });

// app.post("/api/query", (req, res) => {
//   const firstName = req.body.firstName;
//   // const firstName = "Jun";
//   const sql = "SELECT * from student WHERE First_Name = ?";
//   db.query(sql, firstName, (err, result) => {
//     // console.log(result);
//     // console.log(err);
//     res.send(result);
//   });
// });

app.post("/api/query", (req, res) => {
  const firstName = req.body.firstName;
  console.log(req.body.firstName);
  const sql = "SELECT * from student WHERE First_Name = ?";
  db.query(sql, firstName, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
