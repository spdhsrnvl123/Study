# Promise

Promise객체는 javascript에서 비동기 처리를 지원하는 객체 중 하나이다.<br />
대표적으로 Promise 객체로 `fetch()`가 있다.<br />

## ▶ fetch()

- fetch()는 네트워크 통신 함수이며 대표적으로 Promise 객체를 사용하는 함수이다.
- fetch()의 Return 값은 Promise 데이터타입을 리턴한다.<br /> 그리고 이 Promise 데이터타입은 response Object를 돌려줄 것이다.
- fetch()가 리턴한 값(promise 객체)은 then(),catch()메서드를 사용할 수 있다.
  - then()
    - 코드가 제대로 수행되었을 때 작동.
    - then() 함수 안에는 callback()를 입력한다.
    - callback() 안에는 응답을 받았을 때 수행하는 코드를 작성.
    - 성공적으로 실행됐다면 response에는 fetch()의 결과가 들어있다.
  - catch() : 문제가 발생했을 때 작동
    - catch()에는 callback()를 입력한다.
    - 비동기 작업에 실패했을 때 수행하는 코드 작성
    - err에는 에러 관련 정보들이 들어있다.

### **.then(function(response){})**

- response 파라미터에 안에는 여러가지 정보(서버와 통신결과,서버와 어떤 데이터를 통신했는지 등)가 저장 되어있다.

### **response.json()**

1. api문서에 있는 텍스트를 json데이터타입이라는 것을 자바스크립트에게 알려준다.
2. 웹 브라우저는 json데이터타입에 맞게 그 데이터를 해석해서 자바스크립트 데이터 타입으로 돌려주게 된다.
3. response.json 리턴값은 promise객체가 반환된다.
4. 결론 : response.json()은 promise이다.
5. 반환된 promise 역할은 json텍스트를 자바스크립트 데이터타입으로 컨버팅하는 프로미스이다.
6. 이 프로미스는 이 컨버팅작업이 끝났을때 then을 호출하는 것이다.
7. response.json()은 promise이므로 then을 사용가능

### promise를 사용하는 방법은 두가지 방법이 있다.

#### 🚀**First**

**Nested방식**<br />
promise는 then()을 사용할 수 있기 때문에 then()안에 또 then()이 들어가고 다시 또 then()이 들어가 는 방식

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    response.json().then(function (data) {
      console.log("data",data);
    });
  })
  .catch(function (reason) {
    console.log("reason", reason);
  });
```

#### 🚀**Second**

**chaining방식**<br />
then()안에서 promise를 return 하고 바깥쪽에서는 내부 then()과 외부 then()을 연결하는 방식이다.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .catch(function (response) {
    console.log("response", response);
  })
  .then(function (data) {
    console.log("data", data);
  });
```

※ 둘다 장단점이 있지만 chaining방식을 더 많이 사용한다.
