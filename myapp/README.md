### create-react-app x typescript intall

`npx create-react-app my-app --template typescript` <br />
https://create-react-app.dev/docs/adding-typescript/

### typescript x styled-components install

`npm install --save @types/styled-components` <br />
https://www.npmjs.com/package/@types/styled-components

### Flat UI Color

https://flatuicolors.com/palette/gb

### Reset CSS

https://github.com/zacanger/styled-reset/blob/master/src/index.ts

### createGlobalStyle

- 전역 스타일을 처리하는 특수 styled-Component를 생성하는 helper함수이다.
- createGlobalStyle도 컴포넌트이다.
- 렌더링 될 때, 그 컴포넌트는 전역 스코프에 스타일들을 올려준다.(고립되지 않음) <br />
  https://styled-components.com/docs/api#createglobalstyle

### Fragment

- 일종의 유령 컴포넌트 이다.

```jsx
function App() {
  return (
    <>
      {" "}
      {/* Fragment */}
      <GlobalStyle />
      <Router />
    </>
  );
}
```

### Crypto Icon API

https://coinicons-api.vercel.app/
