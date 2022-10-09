# styled-component

## ▶ 2.1

프로젝트 셋업<br />
npx create-react-app "폴더명"

styled-components설치 <br />
npm i styled-components

```jsx
//App.js
import styled from "styled-components";

function App() {
  const Father = styled.div`
    display: flex;
  `;
  const BoxOne = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
  `;
  const BoxTwo = styled.div`
    background-color: tomato;
    width: 100px;
    height: 100px;
  `;
  const Text = styled.span`
    color: white;
  `;
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
```

## ▶ 2.2

Extending Styles<br />
다른 컴포넌트의 스타일을 상속

```jsx
//App.js
import styled from "styled-components";

function App(){
    const Father = styled.div`
        display:flex;
    `
    const Box = styled.div`
        background-color:${props => props.bgColor};
        width:100px;
        height:100px;
    `
    const Circle = styled(Box)`
        border-radius:50px;
    `
    // Box에 있는 컴포넌트 속성을 가져오고 Circle 컴포넌트에 border-radius : 50px;속성을 추가한다.
    return(
        <Father>
            <Box bgColor="yellow" />
            <Circle bgColor="tomato" />
        </Father>
    )
}
```

## ▶ 2.3

minLength = "10"하면 값이 비어 있거나 10자 이상이어야 유효하다.

required

- 속성은 boolean속성이다.
- \<input>태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시한다.
- 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true값을 가지게 된다.

attrs <br />
해당 태그에 속성 추가.

as <br />
태그 변경.

```jsx
// App.js
import sylted from "styled-components";

function App(){
    const Father = styled.div`
        display : flex;
    `
    const Input = styled.input.attrs({required:true, minLength:"10"})`
        backgruond-color:tomato;
    `;

    return(
        <Father as="header">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </Father>
    )
}
```

## ▶ 2.3,5

styled-components에서 애니메이션을 주는 방법은 keyframes 작성.

animation 이름을 설정할 때 "${}" -> string interporation을 사용한다.

```jsx
// App.js
import styled, { keyframe } from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const rotationAnimation = keyframes`
    0%{
        transfrom : rotate(0deg);
        border-radius :0px;
    }
    50% {
        transform:rotate(360deg);
        border-radius:100px;
    }
    100% {
        transform:rotate(0deg);
        border-radius:0px;
    }
    `;

  const Box = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: tomato;
    animation: ${rotationAnimation} 4s linear infinite;

    span {
      font-size: 36px;
      $:hover {
        font-size: 40px;
      }
      $:active {
        opacity: 0;
      }
    }
    /*
        span:hover{

        } 위에 있는 $:hover과 같은 기능
        */
  `;
  return (
    <Wrapper>
      <Box>
        <span>◎‿◎</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```

```jsx
// App.js
import styled, { keyframes } from "styled-components";
//styled-components에서 애니메이션을 주는 방법은 keyframes작성.

function App() {
  const Wrapper = styled.div`
    display: flex;
  `;

  const rotationAnimation = keyframes` //
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% { 
        transform:rotate(360deg);
        border-radius:100px;
    }
    100% {
        transform:rotate(0deg);
        border-radius:0px;
    }
    `;

  const Emoji = styled.span`
    font-size: 36px;
  `;

  const Box = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: tomato;
    animation: ${rotationAnimation} 4s linear infinite;
    /* animation 이름을 설정할 때 "$ {}"->string interporation을 사용한다. */

    ${Emoji} {
      //span이나 p로 지정하게 되면 태그가 바꼈을 때 대응을 못하기 때문에 현재처럼 작성.
      &:hover {
        font-size: 98px;
      }
    }
  `;

  return (
    <Wrapper>
      <Box>
        <Emoji as="p">◎‿◎</Emoji>
      </Box>
      <Emoji as="p">◎_◎</Emoji>
    </Wrapper>
  );
}

export default App;
```

## ▶ 2.7

### Theming <br />

styled components는 TehmeProvider wrapper 컴포넌트를 통해 전체 테마를 지원한다.<br />
이 컴포넌트는 컨텍스트 API를 통해 자체 아래에 모든 React 구성 요소에 테마를 제공한다.<br />
렌더 트리에서 모든 스타일 구성 요소는 여러 수준의 깊이에 있는 경우에도 제공된 테마에 액세스 할 수 있다.<br />
ex) ThemeProvieder theme = {theme}

https://styled-components.com/docs/advanced

### the theme prop <br />

theme는 theme prop을 사용하여 컴포넌트로 전달 될 수도 있다.
ex) color: ${props => props.theme.main};

https://styled-components.com/docs/advanced#the-theme-prop

```jsx
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client'l
import { ThemeProvider } from 'styled-components';
import App from './App'

const darkTheme = {
    textColor : "whitesmoke",
    backgruondColor : "#111"
}

const lightTheme = {
    textColor : "#111",
    backgruondColor : "whitesmoke"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* themeProvider는 prop 하나가 필요하다. */}
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
  </React.StrictMode>
);
```

```jsx
// App.js

import styled from "styled-components"

const Title = styled.h1`
    color : ${(props) => props.theme.textColor};
`
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  backgruond-color:${(props) => props.theme.backgruondColor);
`;

function App(){
    retrun(
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    )
}

```
