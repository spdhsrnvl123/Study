# javascript에서 값은 원시값과 참조값으로 나뉜다.

## 원시값

- Number
- String
- Boolean
- Null
- Undefined

## 참조값

- Object
- Symbol

원시값은 값을 복사 할 때 복사된 값을 다른 메모리에 할당 하기 때문에 원래의 값과 복사된 값이 서로에게 영향을 미치지 않는다.

```js
const a = 1;
let b = a;

b = 2;

console.log(a); //1
console.log(b); //2
```

하지만 참조값은 변수가 객체의 주소를 가리키는 값이기 때문에 복사된 값(주소)이 같은 값을 가리킨다.

```js
const a = { number: 1 };
let b = 1;

b.number = 2;

console.log(a); //{number : 2}
console.log(b); //{number : 2}
```

# 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)

## 얕은 복사(Shallow Copy)

얕은 복사는 참조(주소)값의 복사를 나타낸다.

```js
const obj = { value: 1 };
const newObj = obj;

newObj.value = 2;

console.log(obj.value); //2
console.log(obj === newObj); //true
```

> **obj** 객체를 새로운 **newObj** 객체에 할당하였으며 이를 참조 할당이라 부른다. 복사 후 **newObj** 객체의 **value**값을 변경하였더니 기존의 **obj.value**값도 같이 변경된 것을 알 수 있다. 두 객체를 비교해도 **true**로 나온다. 이렇게 자바스크립트의 참조 타입은 얕은 복사가 된다고 볼 수 있으며, 이는 데이터가 그대로 생성되는 것이 아닌 해당 데이터의 참조 값(메모리 주소)를 전달하여 결국 한 데이터를 공유하는 것이다.

## 깊은 복사(Deep Copy)

깊은 복사는 값 자체의 복사를 나타낸다.

```js
let a = 1;
let b = a;

b = 2;

console.log(a); //1
console.log(b); //2
console.log(a == b); //false
```

> 변수 **a**를 새로운 **b**에 할당하였고 **b** 값을 변경하여도 기존의 **a**의 값은 변경되지 않는다. 두 값을 비교하면 **false**가 출력되며 서로의 값은 단독으로 존재하다는 것을 알 수 있다. 이렇게 자바스크립트의 원시 타입은 깊은 복사가 되며, 이는 독립적인 메모리에 값 자체를 할당하여 생성하는 것이라 볼 수 있다.

https://velog.io/@recordboy/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%ACShallow-Copy%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%ACDeep-Copy

# Javascript의 Object.assign() 함수

Javascript의 Object.assign() 함수는 여러 개의 매개변수 객체 중 target 매개변수 객체에 나머지 객체를 병합하는 함수이다. 여러 객체의 프로퍼티를 복사하여 첫 번째 객체의 프로퍼티에 추가한 뒤에 그 객체를 반환하는 함수이다.<br />
javascript의 Object.assign()함수를 사용하기 위해서는 꼭 target 객체를 정해야 한다.

```js
//Object.assign() 함수 사용방법
Object.assign([target 객체],[여러개의 객체])
```

```js
var object = { a: 111 };
var object2 = { b: 222 };
var object3 = { c: 333 };
var newObject = Object.assign({}, object1, object2, object3);

console.log(newObject); //{a:111,b:222,c:333}
```

# 재귀함수

함수가 자신을 다시 호출하는 구조로 만들어진 함수이다. 재귀함수는 종료조건이 있어야 하며, 종료조건을 성정해주지 않으면 무한 반복을 하게된다. 재귀함수로 작성이 되는 코드는 반복문으로도 작성할 수 있다.
https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98
