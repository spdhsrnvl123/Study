# 📖async&await

## 📌 An alternative to callback hell, then

### ✍ callback hell

```js
timer(1000, function () {
  console.log("작업");
  timer(1000, function () {
    console.log("작업");
    timer(1000, function () {
      console.log("작업");
    });
  });
});
```

### ✍ then(chaining방식)

```js
timer(1000)
  .then(function () {
    console.log("작업");
    return timer(1000);
  })
  .then(function () {
    console.log("작업");
    return timer(1000);
  })
  .then(function () {
    console.log("작업");
  });
```

## 📌An alternative to then, async&await

### ✍ then

```js
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
timer(1000)
  .then(function (time) {
    //1000은 time인자에 들어간다.
    console.log("time:" + time);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log("time:" + time);
    return timer(time + 1000);
  })
  .then(function (time) {
    console.log("time:" + time);
  });
```

React 환경

```jsx
//fetch 함수를 실행하면 Promise 객체를 반환한다.
const [coins, setCoins] = useState([]);
useEffect(() => {
  fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => setCoins(json));
  setLoading(false);
}, []);
//useEffect함수를 사용하여 한번만 통신하게 한다.
//fetch로 얻어온 데이터값 response값을 response.json()을 이용하여 자바스크립트 객체로 반환.
//변환된 객체값을 setCoins변수에 넣어 state값으로 넣어준다.
```

### ✍ async&await<br />

**async**

- 비동기적으로 동작하는 함수.
- 함수 앞에 붙이면 그 함수는 promise를 return 한다.
  <br />

**await**

- 비동기적인 함수 앞에 함수가 실행되는걸 기다리게 만듬.
- async함수 안에서만 사용할 수 있다.

```jsx
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
async function run() {
  var time = await timer(1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
}

run();
```

```jsx
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
async function run() {
  console.log("start");
  var time = await timer(1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  console.log("end");
}

async function run2() {
  console.log("parent start");
  await run();
  console.log("parent end");
}
run2();

//순서대로 동작한다.
//
//console.log(run()); -> promise 리턴 -> 이말은 run()앞에도 await을 사용할 수 있다.
/*
결론 : async는 평범한 함수를 promise를 리턴하는 비동기적인 함수로
만들어주는 키워드이고 그렇기 때문에 함수안에서는 await 사용할 수 있다.
*/
```

✍ async&await 와 .then 병행 활용

```jsx
async function run() {
  console.log("start");
  var time = await timer(1000);
  console.log("time: " + time);
  time = await timer(time + 1000);
  console.log("time: " + time);
  time = await timer(time + 1000);
  console.log("time: " + time);
  console.log("end");
  return time;
  // async함수에 return값을 만들어 준다면 run2()함수 안 time에 값이 들어간다.
}
async function run2() {
  console.log("parent start");
  var time = await run();
  console.log("time:" + time);
  console.log("parent end");
}
console.log("parent parent start");
run2().then(function () {
  console.log("parnet parent end");
  // 반복해서 async함수를 다시 만들어 사용하고 싶지 않을 때는 마지막에 then()함수를 사용해주는 방법이 있다.
});
```

※참고 : [https://www.youtube.com/watch?v=1z5bU-CTVsQ](https://www.youtube.com/watch?v=1z5bU-CTVsQ) 생활코딩

**실전) promise객체의 메서드인 fetch로 통신하여 await을 이용하여 json변수에 넣어주고 async함수로 감싸주어 json형식 데이터를 자바스크립트 객체로 변환하는 json()을 이용하여 getMovies 함수로 넣어주었다.**

```jsx
const getMovies = async () => {
  const json = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
  ).json();
};
/*
const getMovies = async () =>{
	const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
	const json = await response.json();
};
*/
```
