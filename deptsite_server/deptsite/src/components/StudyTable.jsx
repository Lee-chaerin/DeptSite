import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudyTable = () => {
  const[studyTable, setStudyTable] = useState([{
    id: 0,
    writer: '',
    title: '',
    date: ''
  }]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:8000/api/study');
        setStudyTable(res.data.reverse().map(data => {
          return{
            id: data.id,
            writer: data.name,
            title: data.title,
            date: data.create_time.substring(0, 10)
          }
        }))
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const postClick = (e) => {
    console.log(e.id);
    window.location.href = `/study?id=${e.id}`
  }

  let post = studyTable.map((post, index) => {
    return(
      <tr onClick={()=>postClick(post)}>
        <td>{studyTable.length - index}</td>
        <td>{post.writer}</td>
        <td>{post.title}</td>
        <td>{post.date}</td>
      </tr>
    )
  })

  return (
    <table className='noticeBoard'>
      <th>번호</th>
      <th>작성자</th>
      <th>제목</th>
      <th>작성일</th>
      {post}
    </table>
  );
};

export default StudyTable;