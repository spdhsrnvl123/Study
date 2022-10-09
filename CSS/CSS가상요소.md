# 📖 CSS가상요소 :after,before 요소 위치 지정하기

결론 부터 말하자면 아래와 같다.

1. 위치를 지정하기 위해서는 대상 엘리먼트, after,before 모두의 스타일이 position:absolute 여야 한다.
2. after,before 가상요소는 content 속성이 지정되어야한다.
3. after,before는 그 기준인 엘리먼트를 기준으로 위치가 지정된다.
4. 위치 지정시 top,left 와 transform : translate() 는 같은 효과를 가진다.

## 1.대상 엘리먼트와 after,before 엘리먼트는 position:absolute;여야 한다.

위의 전제조건이 있어야 다음단계(위치지정)로 넘어갈 수 있다.
앞으로 사용할 코드이다.

```jsx
----------html----------
<div id="parent">
    <div id="base"></div>
</div>
----------css-----------
#base { position: absolute;}
#base::before, #base::after {position: absolute;}
```

## 2.after,before 가상요소는 content 속성이 지정되어야한다.

1번과 마찬가지로 전제조건이다. 즉 after와 before에 content:””라도 명시해줘야한다.

## 3.가상요소(after,before)는 대상 엘리먼트를 기준으로 위치가 지정된다.

즉 코드에서 #base::after와 #base::before요소는  #parent가 아닌 #base를 기준으로 위치가 지정된다.

```jsx
<div id="parent">
    <div id="base"></div>
</div>
-----------css-------
#base { position: absolute;}
#base::before {
    position: absolute;
    top: 20px;
}
```

## 4.가상요소(after,before)에서 top,left는 translate와 같은 효과이다.

즉 위에서 언급한 가상요소의 스타일 top:20px; left:30px는 transform:translate(20px,30px); 와 같다.

※참고:[https://rst0070.github.io/css-pseudo-element-positioning.html](https://rst0070.github.io/css-pseudo-element-positioning.html)
