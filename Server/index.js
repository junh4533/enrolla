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

const credentials =
  "(SELECT Credentials_ID FROM credentials WHERE Username = ?)";

const runQuery = (res, query, ...args) => {
  const sql = db.query(query, [...args], (err, result) => {
    // res.send(result);
    if (result) {
      result.length > 0 ? console.log(result) : console.log("NO QUERY RESULTS");
    } else {
      console.log(err);
    }
  });
  console.log(sql.sql);
};

app.get("/api/query/test", (req, res) => {
  console.log(req.cookies);
});

app.post("/api/query/test", (req, res) => {
  // TEST QUERY
  const testQuery =
    "select student.Student_ID,`student availability`.Monday,`student availability`.Tuesday,`student availability`.Wednesday,`student availability`.Thursday,`student availability`.Friday,`student availability`.Saturday,`student availability`.Sunday from `student availability` inner join student on student.`student availbility_Student_Availbility_ID`=Student_Availbility_ID";
  // const testQuery = "UPDATE student SET minor = 'ART' WHERE First_Name = 'Jun'";
  runQuery(res, testQuery);
});

// Query for user registration
app.post("/api/query/registration", (req, res) => {
  const fname = req.body.fname,
    lname = req.body.lname,
    email = req.body.email,
    username = req.body.username,
    emplid = req.body.emplid,
    password = req.body.password;

  const credentials =
      "INSERT INTO credentials (`Username`, `Password`) VALUES (?, ?)",
    studentInfo =
      "INSERT INTO student (`First_Name`, `Last_Name`, `Email`, `Student_ID`, `credentials_Credentials_ID`) VALUES (?, ?, ?, ?, (SELECT MAX(Credentials_ID) FROM credentials ));";
  const insertCredentials = runQuery(res, credentials, username, password);
  const insertStudentInfo = runQuery(
    res,
    studentInfo,
    fname,
    lname,
    email,
    parseInt(emplid)
  );
  Promise.all([insertCredentials, insertStudentInfo]);
  res.send("Query Complete");
});

// Query for login authentication
app.post("/api/query/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const loginQuery =
    "SELECT Username, Password FROM enrolla_app.credentials WHERE Username = ? AND Password = ?";
  // runQuery(res, loginQuery, username, password);
  // res.send("lOGIN SUCCESSFUL");

  const sql = db.query(loginQuery, [username, password], (err, result) => {
    if (result) {
      if (result.length > 0) {
        console.log(result);
        res.send(result);
      } else {
        res.send("INVALID LOGIN");
        console.log("NO QUERY RESULTS");
      }
    } else {
      console.log(err);
    }
  });
  console.log(sql.sql);
});

// Query for course-list
app.get("/api/query/course-list", (req, res) => {
  const courseListQuery = "SELECT Course_Name FROM courses";
  const sql = db.query(courseListQuery, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      console.log(err);
    }
  });
  console.log(sql.sql);
});

// Query for student info page
app.post("/api/query/student-info", (req, res) => {
  const major = req.body.major,
    minor = req.body.minor,
    coursesTaken = req.body.coursesTaken.map((d) => `"${d}"`).join(","),
    username = req.body.username,
    studentInfoQuery =
      "UPDATE student SET major_Major_ID = (SELECT Major_ID FROM major WHERE major_name = ?), minor = ? WHERE credentials_Credentials_ID = " +
      credentials,
    transcriptQuery =
      "INSERT INTO transcript (`Taken Classes`) VALUES ('[" +
      coursesTaken +
      "]')",
    studentTranscriptQuery =
      "UPDATE student SET transcript_Transcript_ID = (SELECT MAX(Transcript_ID) FROM transcript) WHERE credentials_Credentials_ID = " +
      credentials;

  const updateStudentInfo = runQuery(
      res,
      studentInfoQuery,
      major,
      minor,
      username
    ),
    updateTranscript = runQuery(res, transcriptQuery, coursesTaken),
    updateStudentTranscript = runQuery(res, studentTranscriptQuery, username);
  Promise.all([updateStudentInfo, updateTranscript, updateStudentTranscript]);
  res.send("Query Complete");
});

// Query for student preferences
app.post("/api/query/preferences", (req, res) => {
  const credits = req.body.credits,
    coursesToTake = req.body.coursesToTake,
    monday = req.body.monday,
    tuesday = req.body.tuesday,
    wednesday = req.body.wednesday,
    thursday = req.body.thursday,
    friday = req.body.friday,
    saturday = req.body.saturday,
    sunday = req.body.sunday,
    username = req.body.username,
    // days = req.body.days,
    // hours = req.body.hours,
    availabilityQuery =
      "INSERT INTO `student availability` (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) VALUES ('" +
      JSON.stringify(monday) +
      "', '" +
      JSON.stringify(tuesday) +
      "' ,'" +
      JSON.stringify(wednesday) +
      "', '" +
      JSON.stringify(thursday) +
      "', '" +
      JSON.stringify(friday) +
      "', '" +
      JSON.stringify(saturday) +
      "', '" +
      JSON.stringify(sunday) +
      "')",
    coursesQuery =
      "UPDATE student SET course_Preference = '" +
      JSON.stringify(coursesToTake) +
      "' WHERE credentials_Credentials_ID = " +
      credentials,
    creditsQuery =
      "UPDATE student SET current_Credits = ?, `student availbility_Student_Availbility_ID` = (SELECT MAX(Student_Availbility_ID) FROM `student availability`) WHERE credentials_Credentials_ID = " +
      credentials;

  console.log(monday);

  const updateAvailability = runQuery(
      res,
      availabilityQuery
      // JSON.stringify(monday),
      // tuesday,
      // wednesday,
      // thursday,
      // friday,
      // saturday,
      // sunday
    ),
    updateCoursePreference = runQuery(
      res,
      coursesQuery,
      // coursesToTake,
      username
    ),
    updateCredits = runQuery(res, creditsQuery, credits, username);

  Promise.all([updateAvailability, updateCoursePreference, updateCredits]);
  res.send("Query Complete");
});

// Query for student profile
app.post("/api/query/profile", (req, res) => {});

app.listen(3001, () => {
  console.log("running on port 3001");
});
