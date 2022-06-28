# TypeScript
## Type Aliases을 사용하여 객체 타입뿐만 아니라 모든 타입에 이름을 지정할 수 있다.

## 선택적 프로퍼티(Optional Properties)
인터페이스의 모든 프로퍼티가 필요한 것은 아니다. 어떤 조건에서만 존재하거나 아예 없을 수도 있다. 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수를 전달하는 "option bags"같은 패턴을 만들 때 유용하다.

선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고, 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 <span style="color:yellow">**?**</span>를 붙여 표시한다.

https://typescript-kr.github.io/pages/interfaces.html
```ts
type Age = number; 
type Name = string;

//type 지정
type Player = {
  name : Name,
  age ?: Age //Optional Properties
}

const nico : Player = {
  name : "nico"
}

const lynn : Plyer = {
  name : "lynn"
  name: 12
}

function playerMaker(name:string) : Player{ //일반 함수
//지정된 Player type을 알려주기 위해 ":Player"작성
  return {
    name
  }
}
const nico = playerMaker("nico")
nico.age = 12

const playerMaker_2 = (name:string) : PLayer => ({name})
const nico_2 = playerMaker_2("nico_2")
nico_2.age =12


```
