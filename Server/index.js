const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BCTC2020",
  database: "enrolla_app",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/query", (req, res) => {
  // Query for student email using search box
  const firstName = req.body.firstName;
  const fname = "First_Name";
  const sql = "SELECT * from student WHERE " + fname + "= ?";
  db.query(sql, firstName, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

app.post("/api/query/test", (req, res) => {
  // TEST QUERY
  // const testQuery = "SELECT minor from student WHERE First_Name = 'Jun'";
  const testQuery = "UPDATE student SET minor = 'acc' WHERE First_Name = 'Jun'";
  db.query(testQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// Query for user registration
app.post("/api/query/registration", (req, res) => {
  const registrationQuery = "";
  db.query(registrationQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// Query for login authentication
app.post("/api/query/login", (req, res) => {
  const loginQuery = "";
  db.query(loginQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// Query for student info page
app.post("/api/query/studentInfo", (req, res) => {
  const studentInfoQuery = "";
  db.query(studentInfoQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// Query for student schedule preferences
app.post("/api/query/schedule", (req, res) => {
  const schedulePreferenceQuery = "";
  db.query(schedulePreferenceQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

// Query for student profile
app.post("/api/query/profile", (req, res) => {
  const profileQuery = "";
  db.query(profileQuery, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
