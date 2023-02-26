import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import IntroducePage from './pages/IntroducePage';
import ProjectPage from './pages/ProjectPage';
import StudyPage from './pages/StudyPage';
import QnAPage from './pages/QnAPage';

import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/introduce" element={<IntroducePage/>}/>
        <Route path="/study" element={<StudyPage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/qna" element={<QnAPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
