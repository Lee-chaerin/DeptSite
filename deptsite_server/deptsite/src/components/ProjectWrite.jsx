import React, { useState } from 'react';

const ProjectWrite = ({writePost}) => {
  const [projectPost, setProjectPost] = useState({
    student_id: 2021142030,
    name: '이채린',
    title: '',
    content: ''
  });

  const setChange =(e) => {
    setProjectPost({
      ...projectPost,
      [e.target.name]: e.target.value,
    });
    console.log(projectPost);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/project', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(projectPost),
      });
      const data = await res.json();
      console.log('서버 응답:', data);
    } catch (error) {
      console.error('API 호출 오류:', error);
    }
    alert("저장 완료");
    writePost();
  };

  const cancel = () => {
    if(window.confirm("글 작성을 취소하겠습니까?")) {
      writePost();
    }
  }

  return (
    <div className='writePost'>
      <form onSubmit={handleSubmit}>
        <table className='writeTable'>
          <tr>
            <th>제목</th>
            <td><input type='text' name='title' maxLength="45" required onChange={setChange}/></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea type='text' name='content' required onChange={setChange}/></td>
          </tr>
        </table>
        <div>
          <button type='submit'>저장하기</button>
          <button type='reset' onClick={cancel} >취소하기</button>
        </div>
      </form>
    </div>
  )
};

export default ProjectWrite;