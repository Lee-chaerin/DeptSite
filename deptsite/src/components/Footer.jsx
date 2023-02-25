import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer'>
      <span>
        <span>
          <h4><span>학교 주소 :</span> 17869 경기도 평택시 서동대로 3825 (구 용이동 111번지)</h4>
          <h4><span>TEL :</span> 031-659-8114</h4>
          <h4><span>FAX :</span> 031-659-8011</h4>
        </span>
        <span>
          <h4><span>학과 사무실 위치 :</span> 이공관 4층 420호</h4>
          <h4><span>TEL :</span> 031-659-8523</h4>
        </span>
      </span>
      
      <Link to="https://www.ptu.ac.kr/" target="_blank">
        <img src="ptuLogoF.png" alt="ptuLogo"/>
      </Link>
    </div>
  );
};

export default Footer;