# ❗️createGlobalStyle error
styled-components에서 제공하는 함수인 createGlobalStyle은 전역 스타일링을 설정할 수 있다.<br>
하지만, 스타일링을 설정을 할 때에 `@import`구문을 사용하면 CSSOM API 다루지 못한다고 에러가 발생한다.

### 🖥 error message
![](images/../../images/createGlobalStyle_error_message.png)

### 🖥 error causing
![](images/../../images/createGlobalStyle_error_causing.png)