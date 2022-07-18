# setTimeout(callback,[timeout],[param1],[param2]...)

### callback

지정한 시간이 지나면 지정한 콜백 함수를 호출한다.

지정한 시간이 지난 후 호출되는 함수나 문자열.
문자열도 전달할 수 있지만 권장하지 않는다.

### timeout

함수의 호출 전 대기 시간
시간의 단위는 ms(1000분의 1초)
정확히 보장된 시간이 아니라 최소 시간을 나타낸다.
만약 값을 생략하면 0이 값으로 사용 값을 0으로 지정해도 함수가 바로 실행되지는 않는다.

### param1, param2

지정한 시간이 지난 후 callback 함수에 전달되는 매개변수

```jsx
//callback 함수를 직접 입력
setTimeout(function () {
  console.log("hi");
}, 2000);

//callback 함수를 직접 입력(arrow 함수)
setTimeout(() => console.log("릇빙"), 2000); //2초 후 '릇빙'출력'

//callback 함수를 인자로 전달
function print(name) {
  console.log(`hi ${name}`);
}

setTimeout(print, 3000, "릇빙"); //3초 후 콘솔에 'hi 릇빙'출력
```

# setInterval(callback,[timeout],[param1],[param2]...)

우리가 지정한 콜백 함수를 지정한 시간마다 반복하여 호출한다.

### callback

지정한 시간마다 반복 호출되는 함수나 문자열.
문자열도 전달할 수 있지만 권장하지는 않는다.

### timeout

함수의 반복 호출 간격 시간
시간의 단위는 ms(1000분의 1초)
정확히 보장된 시간이 아니라 최소 시간을 나타낸다.
만약 값을 생략하면 0이 값으로 사용 값을 0으로 지정해도 함수가 바로 실행되지는 않는다.

### param1,param2...

callback 함수 호출 시 함수에 전달되는 매개변수

```js
//callback 함수를 직접 입력
setInterval(function () {
  console.log("hi");
}, 2000);

//callback 함수를 직접 입력(arrow 함수)
setInterval(() => console.log("hi"), 2000); //2초마다 'hi' 반복 출력

function print(name) {
  console.log(`hi ${name}`);
}
setInterval(print, 3000, "릇빙"); //3초마다 'hi 릇빙'반복 출력
```

콜백 함수의 반복 실행을 종료하고 싶을 때는 clearInterval()함수를 사용한다.

# clearTimeout

clearTimeout은 setTimeout을 취소하는 역할을 한다.

> [변수] = setTimeout([함수명], [함수가 실행될 시간]);<br />
> clearTimeout([변수]);

예제)

3초 후 문자열 “clearTimeout”을 경고창으로 표시하도록 코딩한 후 clearTimeout으로 실행되지 않도록 처리한다.

```js
function alertStr() {
  alert("setTimeout");
}
var timer = setTimeout(alertStr, 3000);
clearTimeout(timer);
```

<참고 블로그>

[https://designer-ej.tistory.com/entry/JS-setTimeout-setInterval-사용](https://designer-ej.tistory.com/entry/JS-setTimeout-setInterval-%EC%82%AC%EC%9A%A9)

[https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220192501207](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220192501207)
