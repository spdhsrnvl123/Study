# 객체(object)의 속성 추가, 삭제

## **객체 속성 추가**

### 동적으로 객체의 속성 추가

- 객체를 먼저 생성 후, 속성을 추후에 입력하여 추가.
- Dot Notation,Bracket Notation 표기법으로 속성 추가 가능

```js
let obj = {}; // obj 빈 객체 선언

console.log(obj); // { } = 빈 객체 출력

// 1. Dot Notation 표기법
obj.name = "miyoni"; // 'name' key에 'miyoni'라는 value 추가
obj.age = 20; // 'age' key에 20이라는 value 추가
obj.add = "Incheon"; // 'add' key에 'Incheon'라는 value 추가

// 2. Bracket Notation 표기법
obj["name"] = "miyoni";
obj["age"] = 20;
obj["add"] = "Incheon";

// 3. 변수를 새로 할당하여 Bracket Notation 표기법으로 추가하기
let name2 = "name";
let age2 = "age";
let add2 = "add";

obj[name2] = "miyoni";
obj[age2] = 20;
obj[add2] = "Incheon";

console.log(obj); // { add: "Incheon", age: 20, name: "miyoni" }
```

## 정적으로 객체 속성 추가

- 객체를 생성할 때 속성도 같이 생성함.

```js
let obj = { add: "Incheon", age: 20, name: "miyoni" };

console.log(obj); // { add: "Incheon", age: 20, name: "miyoni" }
```

## **객체 속성 삭제**

> delete 객체명.속성명; <br/>
> delete 객체명['속성명'];

```js
let obj = { add: "Incheon", age: 20, name: "miyoni" };

// 1. Dot Notation 표기법
delete obj.add; // 객체의 add 속성 (key, value) 모두 삭제

console.log(obj); // { age: 20, name: "miyoni" }

// 2. Bracket Notation 표기법
delete obj["age"]; // 객체의 age 속성 (key, value) 모두 삭제

console.log(obj); // { name: "miyoni" }

// 3. 변수를 새로 할당하여 Bracket Notation 표기법으로 추가
let name2 = "name";
delete obj[name2]; // 객체의 name 속성 (key, value) 모두 삭제

console.log(obj); // {}
```

https://velog.io/@miyoni/TIL11
