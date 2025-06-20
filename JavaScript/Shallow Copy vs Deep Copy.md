## **복사의 개념과 중요성**

JavaScript에서 객체를 다룰 때 가장 중요한 개념 중 하나는 값의 복사입니다. 그리고 데이터를 복사할 때는 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)가 있으며, 두 방식의 차이점을 이해하는 것이 매우 중요합니다.


## **얕은 복사(Shallow Copy)**

**얕은 복사(Shallow Copy)** 란 객체의 최상위 속성들만 복사하는 방식으로, 복사된 객체의 속성들은 **최상위 속성**만 복사가 되고 **중첩된 객체 속성**은 원본 객체의 속성과 동일한 참조(레퍼런스)를 공유합니다.

즉, 복사본이나 원본을 변경하면 중첩된 객체의 속성은 서로 영향을 주게 됩니다.

> 최상위 속성 = 객체 안에 직접 있는 속성들 <br />
중첩된 속성 = 객체 안의 객체, 배열 등 내부 구조


### 특징
- 최상위 속성만 복사됨 (1차원 복사)
- 중첩된 객체는 참조가 복사됨 (동일한 메모리 주소를 가리킴)
- 복사본의 최상위 속성을 변경해도 원본에 영향 없음
- 복사본의 중첩 객체 속성을 변경하면 원본도 변경됨

### **얕은 복사를 만드는 방법**

JavaScript에서 얕은 복사를 만드는 표준 방법들:

1. **스프레드 연산자 (…) 사용**
```js
const original = { name: "홍길동", info: { age: 30 } };
const copy = { ...original };

// 최상위 속성 변경 - 원본에 영향 없음
copy.name = "김철수";
console.log(original.name); // "홍길동"

// 중첩 객체 속성 변경 - 원본도 변경됨!
copy.info.age = 25;
console.log(original.info.age); // 25
```

2. Object.assign() 사용
```js
const original = { name: "홍길동", info: { age: 30 } };
const copy = Object.assign({}, original);

copy.info.age = 25;
console.log(original.info.age); // 25 - 원본도 변경됨!
```

3. 배열의 slice(), concat(), Array.from()
```js
const originalArray = [1, 2, { value: 3 }];
const copyArray = originalArray.slice();

// 중첩 객체 수정 - 원본도 변경됨
copyArray[2].value = 100;
console.log(originalArray[2].value); // 100
```
## **깊은 복사(Deep Copy)**

**깊은 복사(Deep Copy)** 란 객체의 모든 속성과 중첩된 객체들을 완전히 새로운 메모리에 복사하는 방식입니다. 그렇기 때문에 원본 객체와 복사된 객체는 어떤 참조도 공유하지 않으므로, 한쪽을 변경해도 다른 쪽에 영향을 주지 않습니다.

### 특징

- 객체의 모든 레벨(중첩된 객체 포함)이 새로운 메모리에 복사됨
- 원본과 복사본 간에 참조가 공유되지 않음
- 복사본을 변경해도 원본에 전혀 영향 없음
- 원본을 변경해도 복사본에 전혀 영향 없음


### JSON.stringify(obj)
→ 자바스크립트 객체를 JSON 문자열로 변환해준다.

### JSON.parse(jsonString)
→ JSON 문자열을 자바스크립트 객체로 바꿔준다.

### **깊은 복사를 만드는 방법**

1. **JSON.stringify() + JSON.parse() 사용 (가장 간단한 방법)javascript**
```js
const original = { name: "홍길동", info: { age: 30, hobbies: ["독서", "여행"] } };
const deepCopy = JSON.parse(JSON.stringify(original));

// 중첩 객체 속성 변경
deepCopy.info.age = 25;
deepCopy.info.hobbies.push("음악");

console.log(original.info.age); // 30 - 원본은 변경되지 않음
console.log(original.info.hobbies); // ["독서", "여행"] - 원본은 변경되지 않음
```

### structuredClone()
`structuredClone(value)`은 객체, 배열, Map, Set 등 복잡한 구조를 가진 값들을 깊게 복사해주는 내장 함수야.

2. structuredClone() 사용 (최신 웹 API)

```js
const original = { name: "홍길동", info: { age: 30, hobbies: ["독서", "여행"] } };
const deepCopy = structuredClone(original);

deepCopy.info.hobbies.push("음악");
console.log(original.info.hobbies); // ["독서", "여행"] - 원본은 변경되지 않음
```

3. 재귀적 복사 함수 구현
```js
function deepCopy(obj) {
  // 원시 타입이거나 null인 경우 그대로 반환
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  // 배열인 경우
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }
  
  // 객체인 경우
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepCopy(obj[key]);
    }
  }
  
  return result;
}

const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);
copy.b.c = 3;
console.log(original.b.c); // 2 - 변경되지 않음
```

## **실제 사용 사례와 주의점**

### **얕은 복사 활용 사례**

- 최상위 속성만 변경이 필요한 경우
- 성능이 중요한 경우 (깊은 복사보다 빠름)
- 중첩된 객체가 없거나 변경할 필요가 없는 경우

### **깊은 복사 활용 사례**

- 상태 관리 라이브러리 (Redux, MobX 등)에서 불변성 유지
- 원본 데이터를 보존하면서 여러 변형을 시도해야 할 때
- 복잡한 객체 구조에서 독립적인 사본이 필요할 때

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy


