/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0)
  let [입력값,입력값변경] = useState('');
  
  const addUpdate = (e)=>{
    e.preventDefault()
    // console.log(e.target[0].value)
    let copy = [...글제목]
    copy.unshift(e.target[0].value)
    글제목변경(copy);
  }

  const deleteUpdate = (index)=>{
    let copy = [...글제목];
    delete copy[index];
    글제목변경(copy);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "16px" }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          글제목변경(copy.sort());
        }}
      >
        정렬버튼
      </button>
      {
        글제목.map((v,i)=>{
          return(
            <div key={i} className="list">
              <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{v}</h4><span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] += 1
                따봉변경(copy)
                }}> 👍 </span>{따봉[i]}
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal 글제목={글제목[title]} /> : null
      }
        <input onChange={(e)=>{
          입력값변경(e.target.value)
        }} />
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글발행</button>
    </div>
  );
}

function Modal({글제목,글제목변경}) {
  return (
    <div className="modal">
      <h4>제목 : {글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
