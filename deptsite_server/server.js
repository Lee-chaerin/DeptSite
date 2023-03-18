const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'deptsite/build')));

app.get('/', function(요청, 응답) {
  응답.sendFile(path.join(__dirname, 'deptsite/build/index.html'));
})