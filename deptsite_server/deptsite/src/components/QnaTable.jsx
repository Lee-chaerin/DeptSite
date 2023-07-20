import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QnaTable = ({postNum, currentPage}) => {
  const[qnaTeble, setQnaTable] = useState([{
    id: 0,
    writer: '',
    title: '',
    date: ''
  }]);

  const[qnaPage, setQnaPage] = useState(1);
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  useEffect(() => {
    if(page != null) {
      setQnaPage(page)
      currentPage(page)
    }
  }, [page])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/qna?page=${qnaPage}`);
        setQnaTable(res.data.reverse().map(data => {
          return{
            id: data.id,
            writer: data.name,
            title: data.title,
            date : data.create_time.substring(0, 10)
          }
        }))
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, [qnaPage]);

  const postClick = (e) => {
    console.log(e.id);
    window.location.href = `/qna?id=${e.id}`
  }

  let post = qnaTeble.map((post, index) => {
    return(
      <tr onClick={() => postClick(post)}>
        <td>{(postNum - ((qnaPage - 1) * 10)) - index}</td>
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

export default QnaTable;