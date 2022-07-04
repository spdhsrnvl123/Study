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

## ◈ Nomadercoders - 5

### Classes

**Constructor(생성자)**<br />
객체지향 언어에는 Constructor 생성자가 있다.<br />
모든 class는 Constructor라는 메서드를 가진다. class로 부터 객체를 생성할 때 호출되고 객체의 초기화를 담당.

```ts
class User{
    name : string;
    age : number;
    address : string;

    constructor(name:string,age:number,address:string){
    // 클래스 프로퍼티에 값을 할당
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //class내에 정의된 함수는  method메서드라고 부른다.
    printUserInfo = () : void =>{
        console.log(`${this}의 나이는 ${this.age}이고 사는 곳은 ${this.address}입니다.`
    }
}
let user1 = new User("allDay",28,"경기 의정부");
user1.printUserInfo(); //allDay의 나이는 28이고 사는 곳은 경기 의정부입니다.
```

https://velog.io/@sji7532/TypeScript-Constructor%EC%99%80-%EC%A0%91%EA%B7%BC-%EC%A0%9C%ED%95%9C%EC%9E%90-Getter%EC%99%80-Setter

추상(abstract)클래스<br />
추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.<br />
하지만, 직접 새로운 인스턴스를 만들 수는 없다.

```ts
abstract class User{
    constructor(
        private firstname : string,
        private lastname : string,
        public nickname : string
    ){
        abstract getNickname():void //call Signature
    }
}

class Player extends User{
    //추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야 하는 메서드이다.
    getNickname(){
        console.log(this.nickname)
    }
}

const  nico = Player("nico","las","니꼬");
nico.getFullName()

```

- public : 모든 클래스에서 접근 가능.
- private : 해당 클래스 내에서만 접근 가능(자식 클래스에서도 접근 불가)
- protected : 해당 클래스와 자식 클래스에서 접근 가능.

📌접근 가능한 위치

<table>
    <tr>
        <th>구분</th>
        <th>선언한 클래스 내</th>
        <th>상속받은 클래스 내</th>
        <th>인스턴스</th>
    </tr>
    <tr>
        <td>private</td>
        <td>⭕</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>protected</td>
        <td>⭕</td>
        <td>⭕</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>public</td>
        <td>⭕</td>
        <td>⭕</td>
        <td>⭕</td>
    </tr>
</table>

https://www.typescriptlang.org/docs/handbook/2/classes.html

### **protected ex)**

```ts
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니꼬");
console.log(nico.getFullName()); //"nico las"
```

## ◈ Nomadercoders - 6

## **`type and interface`**

type : 여러가지로 용도로 활용이 가능하며 특정 타입을 지정할 수 있다.<br />
interface : 오직 오브젝트 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드이다.

※ type Freiends = Array<string> -> string[]

```ts
type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// interface Hello = string <- 작동 X

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: "nico",
  team: "blue",
  health: 10,
};
```

## **`interface X readonly 지정`**

```ts
interface User {
  readonly name: string;
}
interface Player extends User {}

const nico: Player = {
  name: "nico",
};

// nico.name = "lalalala" -> error발생 : readonly때문에 작동X
```

## **`type 지정`**

```ts
type User = {
  name: string;
};
type Player = User & {}; //&는 and를 의미.

const nico: Player = {
  name: "nico",
};
```

## **`interface 특징으로는 property들을 축적시킬 수 있다.`**

```ts
interface User {
  name: string;
}
interface User {
  lastName: string;
}
interface User {
  health: number;
}

const nico: User = {
  name: "nco",
  lastName: "n",
  health: 10,
};
```

```ts
type User = {
  name: string;
};
type User = {
  lastName: string;
};
//중복-> type으로는 불가능
```

### ※ 타입스크립트에게 오브젝트의 모양을 알려줄때는 인터페이스를 사용하는걸 권장.

### <span style="color:green">-> interface가 객체지향 프로그래밍처럼 보여서 이해하기 쉽기 때문. </span>
