# 🔥 React

## 1️⃣ array/object 특징 & state 변경함수 특징
```jsx
let arr = [1,2,3]
```
'1,2,3이라는 배열을 arr변수에 넣어주세요'라는 뜻이 아니다.<br />
1,2,3이라는 RAM에 저장해 놓고 1,2,3 이 가리키는 화살표만 변수에 저장하는 뜻이다.

예제) state 함수의 초기 값으로 설정한 배열을 알아보겠다.
```jsx
const App = ()=>{
  let [value,setValue] = useState(["banana","apple","melon"]);
  
  return(
    <button onClick = {
      ()=>{
        value[0] = 'pitch'; //원본 배열의 0번째 인덱스 수정
        setValue(value) 
      }
    }>
    수정버튼
    </button>
  )
}
```
RAM 공간의 ["banana","apple","melon"]에서 value의 0번째 인덱스 수정으로 ["pitch","apple","melon"]으로 변경된다.<br />
하지만, 변수 value값(RAM 공간을 가리키는 화살표)은 변경되지 않는다.<br />
이유 : 배열을 수정했을 뿐이고 변수에 있던 RAM공간을 가리키는 화살표는 수정이 안된다.<br />
결론 : 신규 state값과 변경 state 값이 해당 예제 state함수는 같다고 생각하여 렌더링이 일어나지 않는다.

❗️추가적으로 이해를 돕기 위해서 다른 예제를 만들어 보겠다.
```jsx
const App = ()=>{
  let [value,setValue] = useState(["banana","apple","melon"]);
  
  return(
    <button onClick = {
      ()=>{
        let copy = value;
        copy[0] = 'pitch';
        console.log(copy == value); //true가 나오게 된다.
        setValue(copy) //아무일도 일어나지 않게 된다.
      }
    }>
    수정버튼
    </button>
  )
}

```
기존 state값인 value의 복사본을 만들었다.<br />
하지만 복사본은 value가 가리키는 화살표를 복사 했기 때문에 결국 setValue 함수는 value == copy가 ture라고 생각하여 렌더링이 일어나지 않는다.

### 🚀 **array x state함수 다루기**

array,object 자료를 다룰 때는 원본 데이터를 직접 조작하는 것 보다는 기존값을 보존해주는 식으로 코드 짜는게 좋은 관습이다.<br />
이유 : 원본이 바꿔버렸을 원본이 필요한 경우아 생길 수 있기 떄문이다.<br />
결론 : let copy 같은 변수에다가 기존 array를 복사해놓고 복사본을 조작하는 식으로 코드를 짜는게 안전한 편이다.

```jsx
const App = ()=>{
  let [value,setValue] = useState(["banana","apple","melon"]);
  
  return(
    <button onClick = {
      ()=>{
        let copy = [...value]; //화살표 값도 변경된다.
        copy[0] = 'pitch';
        setValue(copy)
      }
    }>
    수정버튼
    </button>
  )
}
```

state 변경함수를 쓸 때 기존 state === 신규 state 이렇게 먼저 검사한다.
