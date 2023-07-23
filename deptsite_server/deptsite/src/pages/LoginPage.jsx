import React from 'react';

const LoginPage = () => {
  return (
    <div id='loginPage'>
      <div className='main pageTop'>

        <div>

          <h1>로그인</h1>

          <div>
            <span>
              <div style={{marginBottom: "10px"}}>
                <p>아이디</p>
                <input></input>
              </div>
              <div>
                <p>비밀번호</p>
                <input></input>
              </div>
            </span>
            <span><button>로그인</button></span>
          </div>

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