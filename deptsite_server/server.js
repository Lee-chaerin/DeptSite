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


//study_table
app.get('/api/study/count', (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM STUDY_TABLE', (err, result) => {
    res.send(result[0]);
  });
});

app.get('/api/study', (req, res) => {
  if(req.query.id != undefined) {
    db.query('SELECT * FROM STUDY_TABLE WHERE id=?', [req.query.id], (err, result) => {
      res.send(result);
    });
  } else if(req.query.page != undefined) {
    let count = 0;
    const page = req.query.page;
    let limit = 10;
    let offset = 0;

    async function f() {
      try {
        let promise1 = new Promise((resolve, reject) => {
          db.query('SELECT COUNT(*) AS count FROM STUDY_TABLE', (err, result) => {
            count = result[0].count;
            offset = count - (limit*page);
            resolve();
          });
        });

        await promise1;

        let promise2 = new Promise((resolve, reject) => {
          promise1.then(() => {     
            if(offset < 0) {
              limit = limit+offset;
              offset = 0;
            } 
            db.query(`SELECT * FROM STUDY_TABLE LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
              res.send(result);
              resolve(result);
            });
          }).catch(reject);
        });

        await promise2;

      } catch(error) {
        console.log(error)
      }
    }
    f();
  } else {
    db.query('SELECT * FROM STUDY_TABLE', (err, result) => {
      res.send(result);
    });
  }
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



//project_table
app.get('/api/project/count', (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM PROJECT_TABLE', (err, result) => {
    res.send(result[0]);
  });
});

app.get('/api/project', (req, res) => {
  if(req.query.id != undefined) {
    db.query('SELECT * FROM PROJECT_TABLE WHERE id=?', [req.query.id], (err, result) => {
      res.send(result);
    });
  } else if(req.query.page != undefined) {
    let count = 0;
    const page = req.query.page;
    let limit = 10;
    let offset = 0;

    async function f() {
      try {
        let promise1 = new Promise((resolve, reject) => {
          db.query('SELECT COUNT(*) AS count FROM PROJECT_TABLE', (err, result) => {
            count = result[0].count;
            offset = count - (limit*page);
            resolve();
          });
        });

        await promise1;

        let promise2 = new Promise((resolve, reject) => {
          promise1.then(() => {     
            if(offset < 0) {
              limit = limit+offset;
              offset = 0;
            } 
            db.query(`SELECT * FROM PROJECT_TABLE LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
              res.send(result);
              resolve(result);
            });
          }).catch(reject);
        });

        await promise2;

      } catch(error) {
        console.log(error)
      }
    }
    f();
  } else {
    db.query('SELECT * FROM PROJECT_TABLE', (err, result) => {
      res.send(result);
    });
  }
});

app.post('/api/project', (req, res) => {
  db.query('INSERT INTO PROJECT_TABLE (student_id, name, title, content) VALUES (?, ?, ?, ?);', [req.body.student_id, req.body.name, req.body.title, req.body.content], (err, result)=> {
    res.send(result);
  });
});

app.delete('/api/project', (req, res) => {
  db.query('DELETE FROM PROJECT_TABLE WHERE id=?;', [req.body.id], (err, result) => {
    res.send(result);
  });
});

app.put('/api/project', (req, res) => {
  db.query('UPDATE PROJECT_TABLE SET title=?, content=? WHERE id=?', [req.body.title, req.body.content, req.body.id], (err, result) => {
    res.send(result);
  });
});