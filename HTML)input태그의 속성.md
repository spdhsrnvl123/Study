# required

### 정의 및 특징

\<input> 태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드.

required 속성이 제대로 동작하는 \<input> 요소의 type 속성값은 다음과 같다. <br />

- checkbox
- date
- email
- file
- number
- password
- pickers
- radio
- search
- tel
- text
- url

required 속성은 불리언(boolean) 속성이다.<br />
불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true값을 가지게 된다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>HTML input tag - required attribute</title>
  </head>
  <body>
    <form action="/examples/media/action_target.php" method="get">
      이름 : <input type="text" name="st_name" required /><br />
      학과 : <input type="text" name="department" /><br />
      <input type="submit" />
    </form>
  </body>
</html>
```

![](/images/required.JPG)

http://www.tcpschool.com/html-tag-attrs/input-required

# disabled

### 정의 밑 특징

\<input>태그의 disabled 속성은 해당 \<input> 요소가 비활성화됨을 명시.<br />
disabled 속성이 명시된 \<input> 요소는 사용할 수 없으며, 사용자가 클릭할 수도 없다.<br />
또한, 폼 데이터가 제출될 때도 disabled 속성이 명시된 \<input>요소의 데이터는 제출되지 않는다.

따라서 이 속성을 사용하면 특정 조건이 충족될 때까지 사용자가 입력 필드를 클릭할 수 없도록 설정하고, 특정 조건이 충족되면 자바스크립트 등으로 disabled 속성값을 삭제하여 사용자가 입력 필드를 다시 사용할 수 있도록 조절할 수 있다.

disabled 속성은 불리언(boolean) 속성이다.<br />
불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 된다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>HTML input tag - disabled attribute</title>
  </head>
  <body>
    <form action="/examples/media/action_target.php" method="get">
      이름 : <input type="text" name="st_name" /><br />
      학번 : <input type="text" name="st_id" /><br />
      학과 : <input type="text" name="department" disabled /><br />
      <input type="submit" />
    </form>
  </body>
</html>
```

![](/images/disabled.JPG)

http://www.tcpschool.com/html-tag-attrs/input-disabled
