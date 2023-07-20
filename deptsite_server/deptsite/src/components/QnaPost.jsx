import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QnaPost = () => {
  const[qnaPostTable, setQnaPostTable] = useState([{
    id: 0,
    writer: '',
    writerId: 0,
    title: '',
    content: '',
    date: ''
  }]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/qna${window.location.search}`);
        console.log(res.data[0]);
        setQnaPostTable({
          id: res.data[0].id,
          writer: res.data[0].name,
          writerId: res.data[0].student_id,
          title: res.data[0].title,
          content: res.data[0].content,
          date: res.data[0].create_time.substring(0, 10)
        })
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='postTable'>
      <table>
        <tr>
          <th>작성자</th>
          <td>{qnaPostTable.writer}</td>
          <th>학번</th>
          <td>{qnaPostTable.writerId}</td>
        </tr>
        <tr>
          <th>제목</th>
          <td colspan="3">{qnaPostTable.title}</td>
        </tr>
        <tr>
          <th>작성일</th>
          <td colspan="3">{qnaPostTable.date}</td>
        </tr>
        <tr>
          <td colspan="4">
            <div>{qnaPostTable.content}</div>
          </td>
        </tr>
      </table>

      <div>
        <button onClick={() => window.location.href = '/qna'}>목록보기</button>
      </div>
    </div>
  );
};

export default QnaPost;