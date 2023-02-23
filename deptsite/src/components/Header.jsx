import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <span>
        <img src='ptuLogo.png' alt='ptuLogo'/>
        <span>
          <h1>융합소프트웨어학과</h1>
          <h4>Department of Convergence Software</h4>
        </span>
      </span>

      <span>
        <ul>
          <li>INTRODUCE
            <ul>
              <li>학과 소개</li>
              <li>전공교수 소개</li>
              <li>임원 소개</li>
              <li>학과 공지</li>
              <li>학과 갤러리</li>
            </ul>
          </li>
          <li>STUDY</li>
          <li>PROJECT</li>
          <li>Q&A</li>
          <li>로그인</li>
        </ul>
      </span>

    </div>
  );
};

export default Header;