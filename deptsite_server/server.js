const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const path = require('path');


const db = mysql.createPool({
  hoet: "localhost",
  user: "root",
  password: "cofls0408",
  database: "deptsite",
});

app.listen(8000, function () {
  console.log('listening on 8080')
}); 

app.get('/api/db', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const sqlQuery = "SELECT * FROM USERS";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'deptsite/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'deptsite/build/index.html'));
})