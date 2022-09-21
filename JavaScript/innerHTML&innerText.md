# 📖 innerHTML & innerText 차이점

innerHTML , innerText는 Javascript에서 html 태그 (<div>,<p> 등)의 내부 문자를 가져올 때 사용한다.

간단히 차이점을 차이점을 말하자면 내부 문자를 가져올 때 html태그를 문자로 인식할지, 태그로 인식할지의 차이이다.

innerHTML은 가져온 텍스트에 포함된 태그를 인식하여 태그를 적용시킨 후 문자를 보여준다.
innerText는 가져온 텍스트에 포함된 태그도 하나의 텍스트로 인식하여 보여준다.

### ****[innerHTML](https://kyoung-jnn.tistory.com/entry/JavaScript-innerHTML-innerText-%EC%B0%A8%EC%9D%B4%EC%A0%90#innerHTML)****

innerHTML를 이용하여 태그(위 예제에서는 <h1></h1>)을 인식하고 하이라이트를 적용하여 문자를 출력한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="test">사과</div>
    <script>
      document.querySelector("#test").innerHTML
        = "<h1>수박</h1>";
    </script>
</body>
</html>

<!-- '수박'출력 -->
```

## **[innerText](https://kyoung-jnn.tistory.com/entry/JavaScript-innerHTML-innerText-%EC%B0%A8%EC%9D%B4%EC%A0%90#innerText)**

**innerText**는 **태그(<h1></h1>)**를 **하나의 문자열**로 인식하여 전부를 출력한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="test">사과</div>
    <script>
      document.querySelector("#test").innerText
        = "<h1>복숭아</h1>";
    </script>
</body>
</html>
<!-- '<h1>복숭아</h1>'출력 -->
```
