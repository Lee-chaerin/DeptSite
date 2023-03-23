import React from 'react';
import StudyTable from '../components/StudyTable';

const StudyPage = () => {
  return (
    <div id='studyPage'>
      <div className='banner pageTop'>
        <h1>STUDY</h1>
      </div>
      <div className='main'>
        <div>
          <StudyTable/>
        </div>
        <div className='boardPageBtn'>
          <ul>
            <li>&#60;</li>
            <li>1</li>
            <li>2</li>
            <li>&#62;</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default StudyPage;