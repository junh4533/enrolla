const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BCTC2020",
  database: "enrolla_app",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const runQuery = (res, query, ...args) => {
  db.query(query, [...args], (err, result) => {
    res.send(result);
    if (result) {
      result.length > 0 ? console.log(result) : console.log("NO QUERY RESULTS");
    } else {
      console.log(err);
    }
  });
};

app.post("/api/query", (req, res) => {
  // Query for student email using search box
  const firstName = req.body.firstName;
  const fname = "First_Name";
  const sql = "SELECT * from student WHERE " + fname + "= ?";
  runQuery(res, sql, firstName);
});

app.post("/api/query/test", (req, res) => {
  // TEST QUERY
  // const testQuery = "SELECT minor from student WHERE First_Name = 'Jun'";
  const testQuery = "UPDATE student SET minor = 'acc' WHERE First_Name = 'Jun'";
  runQuery(res, testQuery);
});

// Query for user registration
app.post("/api/query/registration", (req, res) => {
  const registrationQuery = "";
  runQuery(res, registrationQuery);
});

// Query for login authentication
app.post("/api/query/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const loginQuery =
    "SELECT Username, Password FROM enrolla_app.credentials WHERE Username = ? AND Password = ?";
  runQuery(res, loginQuery, username, password);
});

// Query for student info page
app.post("/api/query/studentInfo", (req, res) => {
  const studentInfoQuery = "";
  runQuery(res, studentInfoQuery);
});

// Query for student schedule preferences
app.post("/api/query/schedule", (req, res) => {
  const schedulePreferenceQuery = "";
  runQuery(res, schedulePreferenceQuery);
});

// Query for student profile
app.post("/api/query/profile", (req, res) => {
  const profileQuery = "";
  runQuery(res, profileQuery);
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
