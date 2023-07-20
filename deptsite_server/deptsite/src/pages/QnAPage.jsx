import React, { useState } from 'react';
import QnaBoard from '../components/QnaBoard';
import QnaWrite from '../components/QnaWrite';

const QnAPage = () => {
  const [showWritePost, setShowWritePost] = useState(true);

  const writePost = () => {
    setShowWritePost(!showWritePost);
  }

  return (
    <div id='qnaPage'>
      <div className='banner pageTop'>
        <h1>Q&A</h1>
      </div>
      <div className='main'>
        {showWritePost ? <QnaBoard writePost={writePost}/> : <QnaWrite writePost={writePost}/>}
      </div>
    </div>
  );
};

export default QnAPage;