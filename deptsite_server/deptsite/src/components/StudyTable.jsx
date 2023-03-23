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
        setStudyTable(res.data.map(data => {
          return{
            id: data.id,
            writer: data.name,
            title: data.title,
            date: data.create_time
          }
        }))
  
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  console.log(studyTable);


  return (
    <table className='noticeBoard'>
      <th>번호</th>
      <th>작성자</th>
      <th>제목</th>
      <th>작성일</th>
 
      <tr>
        <td>1</td>
        <td>이채린</td>
        <td>이것은 제목이라는 것입니다.</td>
        <td>2023.03.07</td>
      </tr>
      <tr>
        <td>1</td>
        <td>이채린</td>
        <td>이것은 제목이라는 것입니다.</td>
        <td>2023.03.07</td>
      </tr>
      <tr>
        <td>1</td>
        <td>이채린</td>
        <td>이것은 제목이라는 것입니다.</td>
        <td>2023.03.07</td>
      </tr>
      <tr>
        <td>1</td>
        <td>이채린</td>
        <td>이것은 제목이라는 것입니다.</td>
        <td>2023.03.07</td>
      </tr>
      <tr>
        <td>1</td>
        <td>이채린</td>
        <td>이것은 제목이라는 것입니다.</td>
        <td>2023.03.07</td>
      </tr>
    </table>
  );
};

export default StudyTable;