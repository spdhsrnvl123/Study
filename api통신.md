# api통신

## 1) fecth방식

fetch방식으로 데이터를 가져올 경우 json으로 변환해줘야 된다.

### 🚀기본 함수 방식

```jsx
const res = async ()=>{
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = awit response.json();
}

useEffect(()=>{
    res()
},[])

```

### 🚀즉시실행함수 방식

```jsx
useEffect(() => {
  (async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();
  })();
}, []);
```

## 2) axios방식

axios방식은 axios패키지를 설치하면 기본이 json이라 따로 json()메서드를 사용 안해도 된다.

```jsx
const getCoins = async () => {
  const res = await axios("https://api.coinpaprika.com/v1/coins");
};
useEffect(() => {
  getCoins();
}, []);
```
