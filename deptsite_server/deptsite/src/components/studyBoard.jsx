import React from 'react';
import StudyTable from './StudyTable';

const StudyBoard = ({writePost}) => {
  return (
    <div className='board'>
      <div>
        <button onClick={writePost}>글 작성하기</button>
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
  );
};

export default StudyBoard;