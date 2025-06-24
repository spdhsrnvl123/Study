모듈
```html
<script type="module">
    import a_number from './a.js'
    import b_number from './b.js'
    import c_number from'./c.js'
</script>
```
`import`를 사용할꺼면 `type="module` 작성해줘야 한다.

<img width="715" alt="스크린샷 2025-06-24 오후 7 11 31" src="https://github.com/user-attachments/assets/8532f270-da70-4b2f-8e3a-34566437e433" />

이렇게 모듈을 가져오게 되면 브라우저에서 3개의 모듈을 요청하는것을 확인할 수 있다. 모듈이 많아지면 비효율적이다.
웹팩을 사용해서 여러개의 모듈을 하나로 묶에서 http요청을 줄이는게 좋다.

> `const $buttonA = document.querySelector('#button-a')` <br />
$을 붙인 이유는 개발자들이 관습적으로 사용하는 네이밍 방식일 뿐이고 <br />
`document.querySelector`로 선택된 **DOM** 요소라는 걸 명확히 나타낸다.

`package.json` 설정
```zsh
npm init -y
```

웹팩설치 - 웹팩은 운영환경에 배포될 일이 없기 때문에 `--save-dev`를 해준다.
```zsh
npm install --save-dev webpack-cli
```

웹팩 실행
```zsh
npx webpack --entry ./src/index.js --output-path ./dist
```
로컬 환경에서 설치된 cli를 실행하기 위해서는 npx 명령어를 이용해서 실행할 수 있다. 
entry 웹팩의 진입점 - 어떤한 파일을 기준으로 번들링을 할건지
output 은 번들링을 위치할 파일설정

번들링할 때 기본적으로 production이 적용되었기 때문에 띄어쓰기 없이 압축돼서 표현된다.
```js
(()=>{"use strict";console.log(10),console.log(20),console.log(30);const e=document.querySelector("#button-a"),t=document.querySelector("#button-b"),o=document.querySelector("#button-c"),n=document.querySelector("#display");e.addEventListener("click",()=>{n.textContent=10}),t.addEventListener("click",()=>{n.textContent=20}),o.addEventListener("click",()=>{n.textContent=30})})();
```

압축없이 할려면
```zsh
npx webpack --entry ./src/index.js --output-path ./dist --mode development
```
