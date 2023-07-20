import React, { useEffect, useState } from 'react';
import QnaTable from "./QnaTable";
import QnaPost from './QnaPost';

import axios from 'axios';

const QnaBoard = ({writePost}) => {
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

  const[postNum, setPostNum] = useState(0);
  const[pageArray, setPageArray] = useState([]);
  const[pageListMap, setPageListMap] = useState([]);
  const[currentPage, setCurrentPage] = useState(0);

  const[qnaPage, setQnaPage] = useState(1);
  const currentPageNum = (e) => {
    setQnaPage(e);
  }

  useEffect(() => {
    async function checkPost() {
      try {
        const res = await axios.get('http://localhost:8000/api/qna/count');
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
          if(pageArr[i].indexOf(+qnaPage) !== -1) {
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
  }, [qnaPage])

  const pageClick = (e) => {
    window.location.href = `/qna?page=${e}`
  }

  const leftPage = () => {
    console.log("왼쪽")
    if(currentPage === 0) {
      alert("첫번째 페이지 입니다.")
    } else {
      let current = currentPage;
      setCurrentPage(--current)
      setQnaPage(pageArray[current][0])
    }
  }
  
  const rightPage = () => {
    console.log("오른쪽")
    if(currentPage === (pageArray.length-1)) {
      alert("마지막 페이지 입니다.")
    } else {
      let current = currentPage;
      setCurrentPage(++current);
      setQnaPage(pageArray[current][0]);
    }
  }

  return (
    <div>
      {showPost ? 
        <QnaPost/>
        : 
        <div className='board'>
          <div className='boardTable'>
            <button onClick={writePost}>글 작성하기</button>
            <QnaTable postNum={postNum} currentPage={currentPageNum}/>
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

export default QnaBoard;