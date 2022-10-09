# useEffect

> useEffect(function,deps)

- function : 수행하고자 하는 작업.
- deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

useEffect 함수 불러오기

```jsx
import React, { useEffect } from "react";
```

컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행하고 싶을 때는 deps 위치에 빈 배열을 넣는다.

```jsx
useEffect(() => {
  console.log("Hello World");
}, []);
```

https://xiubindev.tistory.com/100
