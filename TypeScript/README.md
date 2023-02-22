## ◈ 1

```ts
/*
ex)PlayerListRule규칙을 따르는 유저를 
ListAdd 함수를 이용하여 이름 또는 나이 객체에 삽입.
*/
type Name = string;
type Age = number;

type PlayerListRule = {
  name: Name;
  age?: Age; //Optional Properties
};

//arrow function argument타입 지정.
/*ListAdd 함수에 매개변수(parameter)에는 개별적으로 타입을 지정.
ListAdd 함수에 반환 값은 따로 PlayerListRule이라는 type을 만들어 지정.
*/
const ListAdd = (name: string, age: number): PlayerListRule => ({ name, age });

const Leutbing = ListAdd("Leutbing", 12);
Leutbing.age = 18;
console.log(Leutbing); //{"name":"Leutbing","age":18}

//general function 타입 지정.
function ListAdd_2(name: string): PlayerListRule {
  return {
    //객체에 넣어줌.
    name,
  };
}

const mongle = ListAdd_2("mongle");
console.log(mongle); //{"name" : "mongle"}
```

## ◈ 4

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

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);
```

> call signature를 작성할 때, 들어올 확실한 타입을 모를 때 generic을 사용한다.<br />
> generic을 사용하는 방법은, 먼저 타입스크립트에게 generic을 사용하고 싶다고 알려줘야한다.

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

### generic X State
useState\<number> ()

state의 type을 지정하려면 generics안에 타입을 지정.<br />
일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지 않아도 되지만 상태가 undefined 또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다.

ex) const [value,setValue] = useState<Value|null>(null);

## ◈ 5

## **Class**

### **Constructor(생성자)**<br />

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

### **abstract(추상클래스)**<br />

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

// const user = new User() <-error(추상클래스)

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

```ts
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: strng): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My Name is ${this.fullName}`;
  }
}
```

### **<span style="color:red">「 타입스크립트에서 추상클래스는 결국 자바스크립트에서 일반 클래스로 변환된다.<br />그럼에도 추상클래스를 사용하는 이유는 다른 클래스들이 표준화된 property와 메서드를 갖도록 해주는 청사진을 만들기 위해 추상 클래스를 사용한다. 」**

> **결론 : 인터페이스를 써야 할 때다.**

## ◈ 6

## **interface**

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

## **interface X readonly 지정**

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

## **type 지정**

```ts
type User = {
  name: string;
};
type Player = User & {}; //&는 and를 의미.

const nico: Player = {
  name: "nico",
};
```

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
// property들을 축적

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

## **interface features**

- 오브젝트나 클래스의 모양을 묘사
- 파일 사이즈↓
- 고유한 사용처
- 자바스크립트 코드로 컴파일X
- 클래스가 특정 형태를 따르도록 강제
- 타입으로 지정 가능
- property들을 축적시킬 수 있다.
- argument에 설정 가능 & return 가능<br />
  단) 인터페이스를 return한다면, 타입을 return하는 것 처럼 new 다음 클래스명을 넣어줘야 하는 class 리턴과는 다르다. 만약 interface리턴 시, new User처럼 작성할 필요 없다.

### **implements**

implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있다. 클래스를 올바르게 구현하지 못하면 오류가 발생한다.<br />
implements절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것이다. 클래스의 유형이나 메서드는 전혀 변경하지 않습니다. 또한 클래스는 여러 인터페이스를 구현할 수도 있다.

```ts
interface User {
  fistName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

//implement 자바스크립트에 없는 단어.
//인터페이스를 상속할 때에는 property를 private으로 만들지 못한다.->public을 사용해야한다.
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My Name is ${this.fullName()}`;
  }
}

function makerUser(user: User): User {
  //new User{} -> X new User()같은걸 할 필요없음.
  return {
    firstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };
}
//argument에 인터페이스를 사용함으로써 오브젝트의 모양을 지정해 줄 수도 있다.
makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
```

## class X interface

```ts
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

//하나 이상의 인터페이스를 동시에 상속가능.
class Player implements User, Human {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```

### **type vs interfaces**

type

```ts
type PlayerA = {
    name : string
}
//타입의 상속
/*
playerAA타입이 PlayerA타입과 lastName을 가지는 오브젝트를 합친 거라고 알려줘야한다.
*/
type PlayerAA = PlayerA & {
    lastName : string
}
/*
나중에 property를 타입에 추가하고 싶다면
type PlayerAA = {
    health : number
}
이런식으로는 불가능.
이유 : PlayerAA타입이 이미 정의되어서 중복됨.
*/
const playerA : PlayerAA = {
    name : "nico"
    lastName : "xxx"
}
```

interface

```ts
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
//인터페이스의 경우 아래 코드는 아무 문제 없다.
interface PlayerBB {
  health: number;
}
const playerB: PlayerBB = {
  name: "nico",
  lastName: "xxx",
  health: 1,
};
```

```ts
//중복 상관 없음
interface PlayerC {
  name: string;
}
interface PlayerC {
  lastName: string;
}
interface PlayerC {
  health: number;
}
const PLayerC: PlayerC = {
  name: "nico",
  lastName: "xxx",
  health: 1,
};
```

interface,type abstract class 대체 가능

```ts
type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
class User implements PlayerA {
  constructor(public firstName: string) {}
}
```

## class X generic X interface

- LocalStorage클래스를 초기화할 때, 타입스크립트에게 T라고 불리는
  제네릭을 받을 계획이라고 알려준다.
- 제네릭의 가장 중요한 특징은 `LocalStorage<T>`에 T제네릭을
  다른 타입에게 물려줄 수 있다.

```ts
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  //T 제네릭을 interface로 보내준다.

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  get(key: string): T {
    return this.storage[key];
  }
  remove(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
//class + generic은 인스턴스를 만들어줄 때 타입을 명시해줘야된다.

stringStorage.set("hello", "hello How are you");
stringStorage.get("hello");
stringStorage.remove("hello");
stringStorage.clear();
```

## ◈ Final

- ### typescript 설치<br />
  `npm i -D typescript`
- ### package.json 초기화<br />
  `npm init -y`
- ## tsconfig.json설정<br />

  `tsconfig.json은 TypeScript로 작업하는 것을 알게되고, 자동완성기능을 제공해준다.`

  `디렉터리에 tsconfig.json파일이 있으면 해당 디렉터리가 TypeScript 프로젝트의 루트임을 나타낸다. tsconfig.json 파일은 프로젝트를 컴파일하는데 필요한 루트 파일과 컴파일러 옵션을 지정한다.`

  https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content

  - ### include
    include의 배열에는, 자바스크립트로 컴파일하고 싶은 모든 디렉터리를 넣게 된다.
    - ["src"]
      타입스크립트가 src의 모든 파일을 확인한다는 것을 의미.
  - ### outDir
    자바스크립트 파일이 생성될 디렉터리를 지정.
  - ### Target(기본값 : ES3)<br />

    어느 버전의 자바스크립트로 타입스크립트를 컴파일하고 싶은지 정함.<br />
    최신 브라우저는 모든 ES6기능을 지원하므로 ES6는 좋은 선택이다. 코드가 이전 환경에 배포된 경우 더 낮은 target을 설정하거나 최신 환경에서 코드 실행이 보장되는 경우 더 높은 target을 설정하도록 선택할 수 있다.<br />
    ex)arrow function : ()=>this는 ES5이하이면 함수표현식으로 변경된다.

  - ### Lib

    타입스크립트에게 어떤 API를 사용하고 어떤 환경에서 코드를 실행하는지를 지정할 수 있다.(target 런타임 환경이 무엇인지를 지정.)<br />
    프로그램이 브라우저에서 실행되면 lib에 "DOM" 유형 정의를 할 수 있다.

    -> DOM : window,document 등<br />
    ex)"lib":["ES6","DOM"]

    https://www.typescriptlang.org/tsconfig#lib

  - ### strict

    모든 엄격한 타입 검사 옵션을 활성화한다.<br />
    strict플래그는 프로그램 정확성을 더 강력하게 보장하는 광범위한 타입 검사 동작을 가능하게 한다.

    https://www.typescriptlang.org/tsconfig#strict

### ▶ 타입스크립트는 내장된 자바스크립트 API를 위한 기본적인 타입 정의를 가지고 있다.

- 타입 정의 : 타입스크립트가 몇몇 자바스크립트 코드와 API의 타입을 설명.<br />
  -> 뛰어난 개발자들이 타입스크립트에게 localStorage의 구조,아규먼트, 그리고 리턴 값과 리턴 타입을 설명 해준거다.

- 정의 파일(d.ts) : 자바스크립트 코드의 모양을 타입스크립트에 설명해주는 파일.

### @ts-check

JavaScript 파일에서 오류를 활성화하려면 <span style="color:skyblue">//@ts-check</span>를 .js파일의 첫 번째 줄에 추가하여 TypeScript가 오류를 발생시키도록 한다.<br />
TypeScript는 여러 오류를 제공할 수 있다.<br />
이러한 오류를 무시하고 싶다면 <span style="color:skyblue">// @ts-ignore</span> 또는 <span style="color:skyblue">// @ts-expect-error</span>를 추가하여 특정 줄의 오류를 무시할 수 있다.
https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check

### JSDoc Reference

JSDoc 주석을 사용하여 JavaScript 파일에 type 정보를 제공할 수 있다.(자바스크립트 파일에서 타입 정보를 제공)
https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
