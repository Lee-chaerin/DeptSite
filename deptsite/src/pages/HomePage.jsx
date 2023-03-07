import React from 'react';

const HomePage = () => {
  return (
    <div id='homePage'>
      <div className='main pageTop'>캘린더</div>

      <div>
        <img src="ptuLogoH.png" alt="Introduce"/>
        <img src="ptuLogoH.png" alt="Study"/>
        <img src="ptuLogoH.png" alt="Project"/>
        <img src="ptuLogoH.png" alt="Qna"/>
      </div>

      <div className='main'>
        <div>갤러리</div>  
        <div>공모전</div>  
      </div>
    </div>
  );
};

export default HomePage;