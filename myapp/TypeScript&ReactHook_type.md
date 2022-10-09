# useState

useState\<number>()

state의 type을 지정하려면 Generics안에 타입을 지정.<br />
일반적으로는 초기값을 지정하면 타입스크립트가 자동으로 타입을 유추하기 때문에 굳이 지정해주지도 않아도 되지만 상태가 undefined또는 null이 될 수도 있거나 객체 또는 배열일 때는 지정해주는 것이 좋다.

ex) const [value,setCalue] = useState<Value|null>(null);

# useLocation

react router dom v6부터는 generic을 지원하지 않아 <span style="color:skyblue"> \<> </span>형태가 아닌 <span style="color:skyblue"> as </span>를 사용하여야 한다.

```tsx
interface RouteState{
    state : {
        name : string;
    };
}

const Coin = ()=>{
    ...
    const {state} = useLocation() as RouteState;
    return(
        ...
        <Title>{state?.name || "Loading..."}</Title>
        ...
    );
};
```

```tsx
interface ILocation {
  //interface 타입 지정할때 앞에 I를 붙이기도 한다.
  state: {
    name: string;
  };
}

const { state } = useLocation() as ILocation;
```

※ react-router-dom v6부터 제네릭을 지원하지 않는다.
