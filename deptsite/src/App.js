import React from 'react';

import MainPage from './pages/MainPage';
import IntroducePage from './pages/IntroducePage';
import ProjectPage from './pages/ProjectPage';
import StudyPage from './pages/StudyPage';
import QnAPage from './pages/QnAPage';

import './App.css';


const App = () => {
  return (
    <>
      <MainPage/>
      <IntroducePage/>
      <ProjectPage/>
      <StudyPage/>
      <QnAPage/>
    </>
  );
};

export default App;
