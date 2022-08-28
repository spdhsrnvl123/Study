# 📖 React-Hook-Form 
사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form이다.

```tsx
import {useForm} from "react-hook-form";

const {register,watch} = useForm();
```
## 🌟 useForm
양식을 쉽게 관리하기 위한 사용자 정의 Hook이다.

<hr />

## 📌 register
name, onBlur, onChange, onClick, ref를 return하는 함수

>  ### 사용법
```html
const {onChange,onBlur,name,ref} = register("category")

<input 
    onChange = {onChange}
    onBlur = {onBlur}
    name = {name}
    ref = {ref}
/>
```
<span style="
color:skyblue">↑ 위 와 같다</span><br />

```html
<input {...register("category")} />
```
하면 register 함수가 반환하는 객체를 input의 props로 사용할 수 있음.

> ### 옵션
- **ref**<br />
반응 요소 참조
    ```html
    <input {...register("test)} />
    ```
- **required**<br />
true인 경우 입력에 값이 있어야 양식을 제출할 수 있을을 나타내는 boolean이다.<br />
errors개체 에서 오류 메시지를 반환하도록 문자열을 할당할 수 있다.

    ```html
    <input {...register("test",{
        required : true
    })}
    />
    <input {...register("test",{
        required : "password is required"
    })}
    />
    ```
- **minLength**<br />
    이 입력에 대해 허용할 값의 최소 길이이다.
    ```html
    <input {...register("test",{
        minLength:1
    })}
    />
    ```
<hr />

## 📌 watch
form의 입력값들의 변화를 관찰할 수 있게 해주는 함수

> ### 사용법
- 전체 관찰
```tsx
console.log(watch())
```
- 이름으로 관찰
```tsx
console.log(watch("name"))
```

## 📌 handlesubmit
form의 유효성 검사가 성공하면 form 데이터를 수신한다.

> ### 사용법
```tsx
    const {register, handleSubmit} = useForm();

    const onValid = (data:any) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onValid)}>
            ...
        </form>
    )
```
## 📌 formState
전체 form 상태에 대한 정보를 나타낸다.<br />
form안에 input값이 충족할 때 까지 나타난다(충족 시 빈 객체 반환)

> ### return값
- **erros**<br />
필드 오류가 있는 객체이다.

> ### 사용법
```tsx
console.log(formState.errors);
```