const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cofls0408',
  database: 'deptsite',
});

app.listen(8000, () => {
  console.log("연결 성공");
});

app.get('/', (req, res) => {
  res.send("연결");
})

app.get('/api/study', (req, res) => {
  db.query('SELECT * FROM STUDY_TABLE', (err, result) => {
    res.send(result);
  });
});

app.post('/api/study', (req, res) => {
  db.query('INSERT INTO STUDY_TABLE (student_id, name, title, content) VALUES (?, ?, ?, ?);', [req.body.student_id, req.body.name, req.body.title, req.body.content], (err, result)=> {
    res.send(result);
  });
});

app.delete('/api/study', (req, res) => {
  db.query('DELETE FROM STUDY_TABLE WHERE id=?;', [req.body.id], (err, result) => {
    res.send(result);
  });
});

app.put('/api/study', (req, res) => {
  db.query('UPDATE STUDY_TABLE SET title=?, content=? WHERE id=?', [req.body.title, req.body.content, req.body.id], (err, result) => {
    res.send(result);
  });
});














/*
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use(express.json());  //who are you (제일 중요한 놈), json 읽어주기

const db = mysql.createPool({
  hoet: "localhost",
  user: "root",
  password: "cofls0408",
  database: "deptsite",
});

app.use(express.urlencoded({extended: true}))

app.listen(8000, function () {
  console.log('listening on 8000');
}); 

app.get('/api/study', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const sqlQuery = "SELECT * FROM STUDY_TABLE";

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/study/insert', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); //port 주소가 다르기 때문에 사용(CORS 에러)
 // const refs = req.body;
  //const sqlQuery = `INSERT INTO STUDY_TABLE(student_id, name, title, content) VALUE(?);`;

  
  const {student_id,name,title,content} = req.body;
  db.query(
    'INSERT INTO STUDY_TABLE(student_id, name, title, content) VALUE(?, ?, ?, ?);',
    [student_id, name,title,content],
    (err, result) => {
      res.send(result); //포스트맨 응답처리
    });

  console.log(req.body)
})
*/



/*
  db.query(sqlQuery, [refs], (err, result) => {
    res.send(result);
    console.log(err.result);
  })
*/

/*
app.use(express.static(path.join(__dirname, 'deptsite/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'deptsite/build/index.html'));
})
*/