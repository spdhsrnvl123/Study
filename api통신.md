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

### async&await❌ 👉 then() , catch()사용시

#### chaining 방식

```jsx
//Coins componnent
const Coins = ()->{
    const [coins,setCoins]  = useState([])l

    const update = () =>{
        fetch("https://api.coinpaprika.com/v1/coins").then(
            (response)=>{
                return response.json();
            }
        ).catch((error)=>{
            console.log(error);
        }).then(
            (data)=>{
                setCoins(data.slice(0,100));
                //json()형식으로 변경한 데이터를 100개만 가공
            }
        )
    }

    update();
    //함수 호출 시 무한렌더링이 발생한다.
    //해결방법 : useEffect Hook을 사용한다.
}
```

useEffect Hook 사용법<br />
https://velog.io/@eunjin/React-useEffect-%EB%AC%B4%ED%95%9C%EB%A3%A8%ED%94%84-%ED%83%88%EC%B6%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

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
