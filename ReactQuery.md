# 📖React Query

**react-query**는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용된다.

## 🧐사용하는 이유

서버로 부터 값을 가져오거나 업데이트 하는 로직을 store 내부에 개발하는 경우가 많다. 그렇다보니 store는 클라이언트 state를 유지해야 하는데 어느 순간부터 store에 클라이언트 데이터와 서버 데이터가 공존하게 된다. 그리고 그 데이터가 서로 상호작용하면서 서버 데이터도 클라이언트 데이터도 아닌 결과가 탄생하게 된다.<br />

ex)서버에는 이미 패치된 데이터가 클라이언트에서는 패치되기 전 데이터가 유저에게 사용되고 있는 것이라고 볼 수 있다.

하지만 react-query를 사용함으로 서버,클라이언트 데이터를 분리한다.

## react-query 장점

- 캐싱
- get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다.(예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행)
- 데이터가 오래 되었다고 판단되면 다시 get
- 동일 데이터 여러번 요청하면 한번만 요청한다.(옵션에 따라 중복 호출 허용 시간 조절 가능)
- 무한 스크롤
- 비동기 과정을 선언적으로 관리할 수 있다.
- react hook과 사용하는 구조가 비슷하다.

사용하기<br />

- 리액트 쿼리 4버전부터는 `@tanstack` 추가.

```
//react-query install
npm install @tanstack/react-query

//react-query-devtools
npm install @tanstack/react-query-devtools
```

### react-query 초기 셋팅

```tsx
//index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <App />
        </QueryClientProvider>
    <React.StrictMode>
    document.getElementById("root")
)
```

# useQuery

- 데이터를 get 하기 위한 api이다. post,update는 `useMutation`을 사용한다.
- 첫번째 파라미터로 unique Key가 들어가고, 두번째 파라미터로 비동기 함수(api호출 함수)가 들어간다.(당연한 말이지만 두번째 파라미터는 promise가 들어가야한다.)
- 첫번째 파라미터로 설정한 unique Key는 다른 컴포넌트에서도 해당 키를 사용하면 호출 가능하다.<br />
  - unique Key는 string과 배열을 받는다.<br />
  - 배열로 넘기면 0번 값은 string값으로 다른 컴포넌트에서 부를 값이 들어가고 두번째 값을 넣으면 query 함수 내부에 파라미터로 해당 값이 전달된다.
- return 값은 api의 성공,실패여부,api return 값을 포함한 객체이다.
- useQuery는 `비동기`로 작동한다. **즉, 한 컴포넌트에 여러개의 useQuery가 있다면 하나가 끝나고 다음 useQuery가 실행되는 것이 아닌 두개의 useQuery가 동시에 실행된다.** 여러개의 비동기 query가 있으면 `useQueries`를 권유
- `enabled`를 사용하면 useQuery를 동기적으로 사용 가능.

### useQuery를 사용하여 데이터 처리

```tsx
//api component
export function fetchCois() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
```

```tsx
//Coins component

interface ICoin {
  id: string;
  name: string;
  ...
  type: string;
}

function Coins(){
    const {isLoading,data} = useQuery<ICoin[]>(["allCoins"],fetchCoins);
}
/*
isLoading
->boolean값이다.
->fetcher함수가 로딩 중이라면 react query는 말해준다.(true)
->그리고 fetcher함수가 끝난다면 react query는 말해준다.(false)

->isLoading은 const[loading,setLoading] = useState(true);
setLoading(false) 대체 가능.

data : fetcher함수 return값이 들어가 있다.
*/
```

※ React Query 기본문서<br />
https://kyounghwan01.github.io/blog/React/react-query/basic/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2

# Query Key

- React Query는 쿼리 키를 기반으로 쿼리 캐싱을 관리
- 쿼리 키는 문자열처럼 단순할 수도 있고 많은 문자열과 중첩 개체의 배열처럼 복잡할 수도 있습니다.

```tsx
const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
```

https://react-query.tanstack.com/guides/query-keys
https://www.zigae.com/react-query-key/

※ React Query - Devtools<br />
https://velog.io/@juanito_y247/React-Query-Devtools

# React Query Devtools

React Query의 내부 작동을 시각화하는데 도움이 되며 문제가 발생하면 디버깅 시간을 절약할 수 있다.<br />

