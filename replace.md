# replace
<span style="color:orange">**먼저 검색되는 1개의 문자열만 반환한다. 
여러 문자열을 변환할 때는 정규 표현식을 이용하여 일치하는 모든 문자열을 변환할 수 있다.**</span>

### 구문
> let newStr = str.replace(regxp | substr, newSubstr | function)

#### 매개변수
- `regexp`(pattern)
정규식(RegExp) 객체 또는 리터럴. 일치하는 항목은 `newSubStr` 또는 지정된 함수(function)가 반환 한 값으로 대체된다.

- `substr`(pattern)
`newSubStr`로 대체 될 `String`. 정규식이 아닌 글자 그대로의 문자열로 처리된다. 오직 첫 번째 일치되는 문자열만이 교체된다.

- `newSubStr`(replacement)
첫번째 파라미터를 대신할 문자열(String). 여러가지 대체 패턴들이 지원된다.

- `function`(replacement)
주어진 `regexp` 또는 `substr`에 일치하는 요소를 대체하는 데 사용될새 하위 문자열을 생성하기 위해 호출되는 함수.

**반환값**
어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열


### 문자열 치환
```js
let str = "Hello world, Java";
str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript
```

바꾸려는 문자열이 여러개 있어도, 처음 찾은 문자열 1개만 변환.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript, Java, Java
```

### 정규식을 이용하여 모든 문자열치환

문자열 안에 변경하려는 문자열을 여러개 있고 모든 문자열을 바꾸고 싶을때, 정규식을 이용하여 모든 문자열을 변경할 수 있다.
`replace(/[old str]/g,'[new str]')`는 문자열에 있는 모든 `old string`을 `new string`으로 변환한다.

>아래 예제에서 `/Java/g`가 정규표현식인데, <span style="color:red">**정규표현식은 /Pattern/flag처럼 패턴과 플래그로 구성된다.**</span>
그리고 주의할 점은 찾으려는 <span style="color:red">**문자열에 따옴표를 입력하지 않아야 한다.**</span>
<span style="color:orange">**플래그 g는 모든 문자열을 변환하라는 의미이다.**</span>

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/g, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

## **3) 대소문자 구분하지 않고 문자열 치환**

대소문자를 구분하지 않고 변경하려면 아래처럼 플래그에 `i`를 추가하시면 된다. 결과를 보면 모든 문자열이 변환된 것을 확인할 수 있다.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/gi, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

https://codechacha.com/ko/javascript-replace-in-string/
