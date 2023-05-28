import React, { useEffect, useState } from 'react';
import StudyTable from './StudyTable';
import StudyPost from './StudyPost';

import axios from 'axios';


const StudyBoard = ({writePost}) => {
  const[showPost, setShowPost] = useState(false); //페이지 전환

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

  const[postNum, setPostNum] = useState(0); //페이지 개수
  const[pageArray, setPageArray] = useState([]); //페이지 묶음 배열
  const[pageListMap, setPageListMap] = useState([]); //페이지 묶음 map
  const[currentPage, setCurrentPage] = useState(0); //현재 페이지 묶음 위치

  const[studyPage, setStudyPage] = useState(1); //현재 페이지 번호
  const currentPageNum = (e) => {
    setStudyPage(e);
  }

  useEffect(() => {
    async function checkPost() {
      try {
        const res = await axios.get('http://localhost:8000/api/study/count');
        let countPost = res.data.count;
        setPostNum(countPost);

        let bundlePage = Math.ceil(countPost / 10);
        let fullPage = Array.from({length:bundlePage}, (v, i) => i+1);
        let pageArr = [];
        let currentPageIndex = 0;

        for(let i=0; i<fullPage.length; i+=5) {
          pageArr.push(fullPage.slice(i, i+5))
        }
        setPageArray(pageArr)

        for(let i=0; i<pageArr.length; i++) {
          if(pageArr[i].indexOf(+studyPage) !== -1) {
            currentPageIndex = i;
            setCurrentPage(currentPageIndex);
          }
        }

        const pageList = pageArr[currentPageIndex].map((i) => {
          return <li onClick={() => pageClick(i)}>{i}</li>
        })
        setPageListMap(pageList);
      } catch(e) {
        console.log(e);
      }
    };
    checkPost();
  }, [studyPage])
  

  console.log(currentPage)
  
  const pageClick = (e) => {
    window.location.href = `/study?page=${e}`
  }
  

  const leftPage = () => {
    console.log("왼쪽")
    if(currentPage === 0) {
      alert("첫번째 페이지 입니다.")
    } else {
      let current = currentPage;
      setCurrentPage(--current)
      setStudyPage(pageArray[current][0])
    }
  }
  
  const rightPage = () => {
    console.log("오른쪽")
    if(currentPage === (pageArray.length-1)) {
      alert("마지막 페이지 입니다.")
    } else {
      let current = currentPage;
      setCurrentPage(++current);
      setStudyPage(pageArray[current][0]);
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
            <StudyTable postNum={postNum} currentPage={currentPageNum}/>
          </div>

          <div className='boardPageBtn'>
            <ul>
              <li onClick={() => leftPage()}>&#60;</li>
              {pageListMap}
              <li onClick={() => rightPage()}>&#62;</li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default StudyBoard;