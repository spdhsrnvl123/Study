# Webpack

## webpack에 대해 도움받기
command -> node_modules/.bin/webpack --help

## webpack을 설정하기 위해서 필수 3가지 옵션
--mode ,--entry ,--output

## 보통 웹팩을 번들링이라고도 함

## AMD
비동기로 로딩되는 환경에서 모듈을 사용하는 것이 목표이다.

## UMD
AMD기반으로 CommandJS 방식까지 지원하는 통합 형태이다.

## css-loader 와 style-loader는 최신 npm이 설치되어 webpack 5 만 지원하기 때문에 빌드가 실패하는 것이다.
styled-loader는 