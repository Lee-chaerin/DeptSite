import React, { useState } from 'react';
import StudyTable from './StudyTable';
import StudyPost from './StudyPost';

const StudyBoard = ({writePost}) => {
  const[showPost, setShowPost] = useState(false);

  if(window.location.search === '') {
    if(showPost !== false) {
      setShowPost(!showPost);
    }
  } else if(/^\?page/.test(window.location.search) === true) {
    if(showPost !== false) {
      setShowPost(!showPost);
    }
  } else if(/^\?id/.test(window.location.search) === true) {
    if(showPost === false) {
      setShowPost(!showPost);
    }
  }

  return (
    <div>
      {showPost ? 
        <StudyPost/>
        : 
        <div className='board'>
          <div className='boardTable'>
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
      }
    </div>
  );
};

export default StudyBoard;