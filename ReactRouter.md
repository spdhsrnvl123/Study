# 📘React Router

페이지 이동이라는 기능은 React에서 React Router를 통해 처리할 수 있다.

## 📌라우팅이란?

- 간단하게 생각 하면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 생각 할 수 있다.
- 리액트에서는 라우팅 관련 라이브러리가 많이 있는데, 가장 많이 쓰이는게 리액트 라우터이다.

## 📌 React Router

- 사용자가 입력한 주소를 감지하며 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공한다.
- 가장 많이 사용하는 라우터 컴포넌트는 **BrowserRouter**와**HashRouter**이다.

## ✍ BrowerRouter

HTML5를 지원하는 브라우저의 주소를 감지 한다.<br />

- \<BrowserRouter>태그로 컴포넌트 감싸주기

## ✍ Routes , Route

- \<Routes>컴포넌트는 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만 렌더링 시켜주는 역할을 한다.
- \<Route>는 path속성에 경로, element속성에는 컴포넌트를 넣어 준다. 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 \*을 사용하면 된다.

## ✍ Link

- 웹 페이지에서는 원래 링크를 보여줄 때 a태그를 사용한다. 하지만 a태그는 클릭시 페이지를 새로 불러오기 때문에 사용하지 않는다.
- Link 컴포넌트는 생김새는 a태그랑 같지만 History API를 통해 브라우저 주소의 경로를 바꾸는 기능이 내장되어 있다.
- 문법 : \<Link to="경로">링크명\</Link>
- import {Link} from 'react-router-dom';

Link 컴포넌트를 이용해서 state 보내기

- React Router v5<br />
  ```jsx
  <Link to = {{pathname:"/home",state:state}}>
  ```
- React Router v6<br />
  ```jsx
  <Link to="/home" state={state} />
  ```

## CodeSandbox

https://codesandbox.io/s/react-router-8nzd91?file=/src/App.js
