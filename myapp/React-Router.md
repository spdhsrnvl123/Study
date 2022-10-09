# 📘React Router

페이지 이동이라는 기능은 React에서 Router를 통해 처리할 수 있다.

## 📌라우팅이란?

- 간단하게 생각 하면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 전송.
- 리액트에서는 라우팅 관련 라이브러리가 많이 있는데, 가장 많이 쓰이는게 리액트 라우터이다.

## 📌 Router

- 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공한다.
- 가장 많이 사용하는 라우터 컴포넌트는 **BrowserRouter**와**HashRouter**이다.
- web용과 Native용이 존재한다.

## ✍ BrowerRouter

HTML5를 지원하는 브라우저의 주소를 감지 한다.<br />

- \<BrowserRouter>태그로 컴포넌트 감싸주기

## ✍ Routes , Route

### \<Routes>

여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만 렌더링 시켜주는 역할을 한다.

React Router를 사용하는 어플리케이션은 위와 같은 구조를 가지게 된다. 실제 프로젝트에서는 위 컴포넌트들이 여러 파일에 걸쳐서 흩어져 있을 수도 있다.

### \<Route>

현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정하는데 사용된다.

- path prop을 통해서 매치시킬 경로를 지정하고 component prop을 통해서 매치되었을 때 보여줄 컴포넌트를 할당한다.

```jsx
<Route path="/about" component={About}>
```

현재 주소창의 경로가 /about 인경우 About 이라는 컴포넌트를 보여준다. 일반적으로 현재 주소창의 URL 경로에 따라 특정 컨텐츠를 보여주거나 숨기기 위해서 사용될 수 있다.

> 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 \*을 사용하면 된다.

```jsx
<Route path="/page1/*" element={<Page1 />} />
<Route path="/page2/*" element={<Page2 />} />
<Route path="/*" element={<NotFound />} />
```

## ✍ Link

- html의 \<a> 태그와 유사한 기능, to prop을 통해서 이동할 경로를 지정해준다.
- 웹 페이지에서는 원래 링크를 보여줄 때 a태그를 사용한다. 하지만 a태그는 클릭시 페이지를 새로 불러오기 때문에 사용하지 않는다.<br />
  ※ HTML `target`속성으로 새로운 페이지 생성 막을 수 있다.
- Link 컴포넌트는 생김새는 a태그랑 같지만 History API를 통해 브라우저 주소의 경로를 바꾸는 기능이 내장되어 있다.
- 문법 : \<Link to="경로">링크명\</Link>

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>;
```

위의 코드는 브라우저에서 클릭이 가능한 about으로 렌더링되고, about을 클릭하면 주소창의 경로가 <도메인 네임>/about 으로 갱신된다.

### Link 컴포넌트를 이용해서 state 보내기

- React Router v5<br />
  ```jsx
  <Link to = {{pathname:"/home",state:state}}>
  ```
- React Router v6<br />
  ```jsx
  <Link to="/home" state={state} />
  ```

## ※ CodeSandbox

https://codesandbox.io/s/react-router-8nzd91?file=/src/App.js

## react-router-dom을 사용하지 않은 라우팅의 구현과 문제점

![](images/react-router.png)

위와같이 \<header>내에 특정 메뉴 버튼을 클릭하면 그에 상응하는 컴포넌트로 {comp} 상태가 바뀌도록 해놓으면 버튼 클릭시 화면에서 \<main /> 부분이 갱신되어서 특정 버튼에 해당하는 화면으로 전환되어 진다.

### 문제점

- 특정 페이지 즐겨찾기 등록불가, 화면이 전환되어도 브라우저 주소창의 url은 고정되어 있기 때문이다.
- 뒤로 가기 버튼을 누르면 해당 앱 내에서 이전 페이지로 이동하는 것이 아니라 그 전에 서핑하던 다른 웹사이트로 이동해버린다.
- 새로고침 버튼을 누르면 사용중이던 컴포넌트가 아닌 최초에 렌더링 되었던 사이트 메인으로 이동한다.
- seo(검색 엔진 최적화) 측면에서도 일반 웹사이트들과 차이가 있어서 검색 엔진에 의해 원치않는 방식으로 색인이 될 수 있음.
