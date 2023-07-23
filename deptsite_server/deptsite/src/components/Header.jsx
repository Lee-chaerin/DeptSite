import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header'>
      <Link to="/">
        <span>
          <img src="ptuLogoH.png" alt="ptuLogo"/>
          <span>
            <h1>융합소프트웨어학과</h1>
            <h4>Department of Convergence Software</h4>
          </span>
        </span>
      </Link>

      <span>
        <ul>
          <li><Link to="introduce">INTRODUCE</Link>
            <ul>
              <li>학과 소개</li>
              <li>전공교수 소개</li>
              <li>임원 소개</li>
              <li>학과 공지</li>
              <li>학과 갤러리</li>
            </ul>
          </li>
          <li><Link to="study">STUDY</Link></li>
          <li><Link to="project">PROJECT</Link></li>
          <li><Link to="qna">Q&A</Link></li>
          <li><Link to='login'>로그인</Link></li>
        </ul>
      </span>

    </div>
  );
};

export default Header;