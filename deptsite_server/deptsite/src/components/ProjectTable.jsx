import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectTable = ({postNum, currentPage}) => {
  const[projectTeble, setProjectTable] = useState([{
    id: 0,
    writer: '',
    title: '',
    date: ''
  }]);

  const[projectPage, setProjectPage] = useState(1);
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  useEffect(() => {
    if(page != null) {
      setProjectPage(page)
      currentPage(page)
    }
  }, [page])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:8000/api/project?page=${projectPage}`);
        setProjectTable(res.data.reverse().map(data => {
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
  }, [projectPage]);

  const postClick = (e) => {
    console.log(e.id);
    window.location.href = `/project?id=${e.id}`
  }

  let post = projectTeble.map((post, index) => {
    return(
      <tr onClick={() => postClick(post)}>
        <td>{(postNum - ((projectPage - 1) * 10)) - index}</td>
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
  )
};

export default ProjectTable;