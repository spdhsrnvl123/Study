# ?.기능

```tsx
<span>{priceInfo?.max_supply}</span>
```

`"?."`입력해줄 경우 priceInfo가 undefined이거나 존재하지 않으면 max_supply를 요구하지 않을 것이다.<br />
`"?"`를 뺄 경우 항상 요구하게 된다.<br />
결론 : priceInfo가 존재하는 경우에만 max_supply를 찾게 된다.
