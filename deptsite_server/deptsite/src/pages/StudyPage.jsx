import React, { useState } from 'react';
import StudyBoard from '../components/StudyBoard';
import StudyWrite from '../components/StudyWrite';

const StudyPage = () => {
  const [showWritePost, setShowWritePost] = useState(true);

  const writePost = () => {
    setShowWritePost(!showWritePost);
  }

  return (
    <div id='studyPage'>
      <div className='banner pageTop'>
        <h1>STUDY</h1>
      </div>
      <div className='main'>
        {showWritePost ? <StudyBoard writePost={writePost}/> : <StudyWrite writePost={writePost}/>}
      </div>
    </div>
  );
};

export default StudyPage;