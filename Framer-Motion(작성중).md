# 📖 Framer Motion
React 용 production-ready 모션 라이브러리(오픈 소스)

설치 : npm i framer-motion

https://www.framer.com/motion
https://github.com/framer/motion

## 📎 Animation
Framer Motion의 애니메이션은 모션 컴포넌트의 유연한 animate 속성을 통해 제어된다. 간단한 애니메이션의 경우 animate props에 직접 값을 설정할 수 있다.<br />
ex) motion.div animate={{ rotate:360 }} transition = {{duration:2}}

https://www.framer.com/docs/animation

## 📎 initial : boolean | Target | VariantLabels (애니메이션의 초기값 지정)<br />
속성, 변형 레이블 또는 시작할 변형 레이블 배열이다.
animate의 값으로 초기화하려면 false로 설정(마운트 애니메이션 비활성화).

https://www.framer.com/docs/component.###initial

## 📎 Transition
Transition은 값이 한 상태에서 다른 상태로 움직이는 방식을 정의한다.
또한 Tween, Spring 또는 Inertia를 사용할 애니메이션 유형을 정의하는 소품을 허용할 수 있다.<br />
ex) motion.div animate={{ rotate: 180 }} transition={{ type: 'spring' }}

https://www.framer.com/docs/transition

## 📎 Variants
Variants은 컴포넌트가 가질 수 있는 미리 정의된 시작적 state 이다.
```
const variants = {
    visible : { opacity:1 },
    hidden : { opacity :0 ,}
}
motion.div initial="hidden" animate="visible" variants={variants}
```

https://www.framer.com/docs/introduction/##variants

## 📎 Orchestration
delayChildren : 딜레이 시간(초) 후에 하위 애니메이션이 시작된다.
staggerChildren : 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있다. 예를 들어, staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초 세 번째 자식은 0.02초 지연되는 식이다. 계산된 stagger 딜레이가 delayChiildren에 추가된다.

https://www.framer.com/docs/transition/#orchestration


->7-4