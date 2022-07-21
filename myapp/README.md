# CRA x typescript install

`npx create-react-app my-app --template typescript` <br />
https://create-react-app.dev/docs/adding-typescript/

# typescript x styled-components install

`npm install --save @types/styled-components` <br />
https://www.npmjs.com/package/@types/styled-components

# Flat UI Color

https://flatuicolors.com/palette/gb

# Reset CSS

https://github.com/zacanger/styled-reset/blob/master/src/index.ts

# createGlobalStyle

전역 스타일을 처리하는 특수 styled-Component를 생성하는 helper함수이다.<br />
createGlobalStyle도 컴포넌트이다.<br />
렌더링 될 때, 그 컴포넌트는 전역 스코프에 스타일들을 올려준다.(고립되지 않음) <br />
https://styled-components.com/docs/api#createglobalstyle

# Fragment

일종의 유령 컴포넌트 이다.

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

# Open API

### Crypto Icon API

https://coinicons-api.vercel.app/

### Coin API

coin id로 코인 받기 (Coins)

https://api.coinpaprika.com/v1/coins/btc-bitcoin <br />
https://api.coinpaprika.com/#operation/getCoinById

coin id로 특정 코인에 대한 시세 정보 얻기 (Tickers)

https://api.coinpaprika.com/v1/tickers/btc-bitcoin <br />
https://api.coinpaprika.com/#operation/getTickersById

# react-router-dom X TypeScript

- useState 타입지정

※ react-router-dom v6부터 제네릭을 지원하지 않는다.

- usefarams 타입지정
- useLocation 타입지정

```tsx
interface ILocation {
  //interface 타입 지정할때 앞에 I를 붙이기도 한다.
  state: {
    name: string;
  };
}

const { state } = useLocation() as ILocation;
```

# VSCode 단축키

📌같은 문자열 선택<br />
`Ctrl(Command) + D`

📌선택한 모든 문자열에 가장 우측 끝으로 포커싱<br />
`Shift + Alt(Option) +i`

📌 현재 선택한 문자열을 기준으로 우측 끝까지 문자열 선택<br />
`Ctrl(Command) + shift + 오른쪽 화살표`

노마더코더 VSC단축키 정리<br />
https://www.youtube.com/watch?v=Wn7j5dfbJF4

#

JSON데이터를 타입스크립트 타입으로 빠르게 변환시켜주는 사이트<br />
https://app.quicktype.io/?l=ts
