# TypeScript

## Type Aliases

Type Aliases을 사용하여 객체 타입뿐만 아니라 모든 타입에 이름을 지정할 수 있다.

## 선택적 프로퍼티(Optional Properties)

인터페이스의 모든 프로퍼티가 필요한 것은 아니다. 어떤 조건에서만 존재하거나 아예 없을 수도 있다. 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수를 전달하는 "option bags"같은 패턴을 만들 때 유용하다.

선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고, 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 <span style="color:yellow">**?**</span>를 붙여 표시한다.

https://typescript-kr.github.io/pages/interfaces.html

## ◈ Nomadercoders - 1

```ts
type Age = number;
type Name = string;

//타입 지정
type Player = {
  name: Name;
  age?: Age; //Optional Properties
};

const nico: Player = {
  name: "nico",
};

const lynn: Plyer = {
  name: "lynn",
  age: 12,
};

//일반 함수 argument타입 지정.
function playerMaker(name: string): Player {
  return {
    //객체에 넣어줌.
    name,
  };
}
const nico = playerMaker("nico");
nico.age = 12;

// arrow function argument 타입 지정.
const soccerMaker = (name: string): Player => ({ name });

const messi = soccerMaker("messi");
messi.age = 12;
console.log(messi); //{"name":"messi","age":12}
```

## ◈ Nomadercoders - 2

### readonly

자바스크립트에서는 쓰이지 않는다

```ts
const names: readonly string[] = ["1", "2"];
names.push("3"); //readonly 때문에 push불가능.
//error message : Property 'push' does not exist on type 'readonly string[]'.
```

### Tuple

```ts
const player : readonly [string,number,boolean] = ["nico",1,true]
player[0] = "hi
//error message : Cannot assign to '0' because it is a read-only property.
```

### any

TypeScript에서 빠져나오기 위한 방법.<br />
any는 모든 것을 비활성화.

```ts
const q: any[] = [1, 2, 3, 4]; //TypeScript 보호장치에서 빠져나옴.
const z: any = true;
q + z; //에러발생 안됨.
```

### unknown

타입을 알지 못할 때 사용.

```ts
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}
```

### void

아무것도 return하지 않는 함수를 대상으로 사용함.
따로 지정 안해줘도 됨.

```ts
function hell() {
  console.log("x");
}
```

### never

함수가 절대 return하지 않을 때 발생.
ex)함수에서 exception(예외) 발생할 때.

```ts
function hello(): never {
  //return "X" //에러발생
  throw new Error("X"); //에러를 발생시키게 하는 함수.
}

function hello_2(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    //코드 작동 X
    name;
  } //여기에 뭘 작성하든 이 타입은 never가 될 거다.
}
```

## ◈ Nomadercoders - 3

### call Signatures

```ts
const add = (a: number, b: number) => a + b; //권장X

type Add = (a: number, b: number) => number;
const plus: Add = (a, b) => a + b;
```

### Overloading

함수가 여러개의 call Signatures를 가지고 있을 때 발생시킨다.(서로 다른 call Signature)

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
// 나쁜예시: 이건 매우 매우 소수의 함수만 이런식으로 할 수 있다.
```

**권장**

```ts
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
push("real");
```

if)하나의 call Signature는 두개의 파라미터를 가지고 다른 하나는 6개의 파라미터를 가지는 경우

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
console.log(add(1, 2)); //3
console.log(add(1, 2, 3)); //6
```

## ◈ Nomadercoders - 4

### generic

generic을 사용하는 이유)<br />
개별적으로 타입을 지정해야 된다.

```ts
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint: superPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
```

> call signature를 작성할 때, 들어올 확실한 타입을 모를 때 generic을 사용한다.<br />
> generic을 사용하는 방법은, 먼저 타입스크립트에 generic을 사용하고 싶다고 알려줘야한다.

```ts
type SuperPrint = {
  <T>(arr: T[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false, "hello"]);
```

> superPrint의 리턴 타입을 바꾸고 싶다고 하면 superPrint는 배열을 받을거고 superPrint는 그 배열의 첫 번째 요소를 리턴하게 만들거다.

```ts
type SuperPrint = {
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false, "hello"]);

console.log(a); //1
console.log(b); //true
console.log(c); //"a"
console.log(d); //1
```

> generic을 하나 더 추가하고 싶다면

```ts
type SuperPrint = {
  <T, M>(a: T[], b: M): T;
};

const superPrint: SuperPrint = (a) => a[0];

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, 2, true, false, "hello"], []);

console.log(a, b, c, d); //1,true,"a",1
```
