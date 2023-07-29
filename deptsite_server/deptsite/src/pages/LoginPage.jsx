import React, { useState } from 'react';

const LoginPage = () => {
  const[user, setUser] = useState({
    student_id: 0,
    password: ''
  });

  const setChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/users?id=${user.student_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const data = await res.json();
      console.log('서버 응답:', data);

      if(data.length === 0) {
        alert("존재하지 않는 아이디입니다.")
      } else if(data[0].password === user.password) {
        alert("로그인 성공")
      } else {
        alert("비밀번호가 다릅니다.")
      }
      
    } catch (error) {
      console.error('API 호출 오류:', error);
    }
  };

  return (
    <div id='loginPage'>
      <div className='main pageTop'>

        <div>

          <h1>로그인</h1>

          <form onSubmit={handleSubmit}>
            <span>
              <div style={{marginBottom: "10px"}}>
                <p>아이디</p>
                <input type='text' name='student_id' maxLength='10' required onChange={setChange}/>
              </div>
              <div>
                <p>비밀번호</p>
                <input type='password' name='password' maxLength='15' required onChange={setChange}/>
              </div>
            </span>
            <span><button type='submit'>로그인</button></span>
          </form>

          <div style={{marginTop: "50px"}}>
            <button style={{marginRight: "25px"}}>아이디/비밀번호 찾기</button>
            <button>회원가입</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;