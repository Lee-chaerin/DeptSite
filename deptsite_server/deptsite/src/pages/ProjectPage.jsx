import React, { useState } from 'react';
import ProjectBoard from '../components/ProjectBoard';
import ProjectWrite from '../components/ProjectWrite';

const ProjectPage = () => {
  const[showWritePost, setShowWritePost] = useState(true);

  const writePost = () => {
    setShowWritePost(!showWritePost);
  }

  return (
    <div id='projectPage'>
      <div className='banner pageTop'>
        <h1>PROJECT</h1>
      </div>
      <div className='main'>
        {showWritePost ? <ProjectBoard writePost={writePost}/> : <ProjectWrite writePost={writePost}/>}
      </div>
    </div>
  );
};

export default ProjectPage;