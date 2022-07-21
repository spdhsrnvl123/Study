# 📖 useLocation

현재 URL 정보를 가져온다.<br />
`useLocation`을 사용하기 위해서는 라우터 설치 필수

```
npm install react-router-dom
```

## 📌사용방법

1. useLocation을 import 한다. <br />
   ```jsx
   import { useLocation } from "react-router-dom";
   ```
2. 변수에 useLocation 정보를 담는다.
   ```jsx
   const location = useLocation();
   ```
3. console.log에서 출력해보고, 원하는 정보를 가져다 사용하면 된다.

   ```jsx
   const location = useLocation();

   console.log(locaiton);
   ```

   출력결과
   ![](/images/useLocation.JPG)

- hash : 주소의 #문자열 뒤의 값
- key : location 객체의 고유값, 초기값은 default 페이지가 변경될 때 마다 고유의 값이 생성된다.
- pathname : 현재 주소 경로
- search : ?를 포함한 쿼리스트링
- state : 페이지로 이동시 임의로 넣을 수 있는 상태 값

https://goddaehee.tistory.com/305

## 📌 useLocation × TypeScript

※ react-router-dom v6부터 제네릭을 지원하지 않는다.

```tsx
//Coins component
<Link to={`/${coin.id}`} state={{ name: coin.name }}></Link>;
//state안에 있는 객체값 url에 넘겨주기.

//Coin component
interface LoactionParams {
  state: {
    name: string;
  };
}

const state = useLocation() as LocationParams;
```

## 📌 useLocation × Link state 속성의 문제점

새탭으로 URL을 입력하여 화면을 열어보면 에러가 발생 할 것이다.<br />
에러가 나는 이유는 새 탭으로 화면을 열 경우 해당 URL의 state값이 정의 되지 않아서다.<br />
state가 생성되려면 Home 화면을 먼저 열어야 한다.

```tsx
//coins component

import { Link } from "react-router-dom";
function Coins() {
  return (
    <Link to={`/${coin.id}`} state={{ name: coin.name }}></Link>
    // to로 설정된 Url로 state를 보낸다.
  );
}
export default Coins;
```

```tsx
//coin component
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface LocationParams {
  state: {
    name: string;
  };
}

function Coin() {
  const { state } = useLocation() as LocationParams;

  return (
    <>
      <div>{state.name}</div>
      //사용❌, TypeError:Cannot read properties of undefined(reading name)
      <div>{state?.name || "Loading..."}</div>
      // 해결 방법: 새탭에서 상세화면 URL을 입력하여 화면을 들어오면 Loading화면을
      보게 만들어 주었다. // 결론 : Home화면을 통해서 들어온다면, Link로 해당 URL로
      이동하기 때문에 Home에서 가져온 state값을 볼 수 있을 것이다.
    </>
  );
}

export default Coin;
```
