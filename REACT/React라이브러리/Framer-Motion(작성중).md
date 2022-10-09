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
delayChildren : 딜레이 시간(초) 후에 하위 애니메이션이 시작된다.<br />
staggerChildren : 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있다. 예를 들어, staggerChildren이 0.01이면 첫 번째 자식은 0초, 두 번째 자식은 0.01초 세 번째 자식은 0.02초 지연되는 식이다. 계산된 stagger 딜레이가 delayChiildren에 추가된다.

https://www.framer.com/docs/transition/#orchestration


inherit : boolean<br />
부모로부터 variant 변경 사항을 상속하지 않도록 하려면 false로 설정합니다.

custom : any<br />
각 애니메이션 컴포넌트에 대해 dynamic variants을 다르게 사용할 사용자 지정 데이터입니다.

```
const  variants = {
    visible : (custom) => ({
        opacity : 1,
        transition : { delay: custom * 0.2 }
    })
}

<motion.div inherit = {false} custom={0} animate="cisible" variants={variants} />
<motion.div custom={1} animate="visible" variants={variants} />
<motion.div custom={2} animate="visible" variants={variants} /> 
```

https://www.framer.com/docs/component/###inherit

place-self(Container Properties)<br />
justify-items과 align-items를 합친 축약형

place-self(Item Properties)<br />
justify-self와 align-self를 합친 축약형

## 📎 Gestrues
### Hover
hover 제스처는 포인터가 컴포터넌트 위로 이동하거나 컴포넌트를 떠날 때를 감지합니다. 
onMouseEnter 및 onMouseLeave와는 달리 실제 마우스 이벤트의 결과로만 호버가 실행되도록 보장됩니다.

### whileHover : VariantsLabels | TargertAndTransition
호버 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블입니다.
<motion.div whileHover={{ scale:0.8 }} />

https://www.framer.com/docs/gestures/#hover

### Tap
whileTap : VariantsLabels | TargetAndTransition<br />
컴포넌트를 누르고 있는 동안 애니메이션할 속성 또는 변형 레이블입니다.<br />
<motion.div whileTap = {{ scale:0.8 }} />

https://www.framer.com/docs/gestures/#tap

### Drag
drag : booolean | "x" | "y"
이 요소에 대해 끌기를 활성화합니다. 기본적으로  false로 설정됩니다. 양방향으로 드래그하려면 true로 설정하십시오. 특정 방향으로만 드래그하려면 "x" 또는 "y"를 설정합니다.
<motion.div drag="x" />

### whileDrag : VariantLabels | TargetAndTransition
드래그 제스처가 인식되는 동안 애니메이션할 속성 또는 변형 레이블입니다.<br />
<motion.div whileDrag ={{scale : 1.2}} />

https://www.framer.com/docs/gestures/#drag

### dragConStranits
허용된 드래그 가능 영역에 제약 조건을 적용합니다.
dragConstraints 에는 드래그 가능한 컴포넌트의 가장자리 거리를 정의합니다.(드래그 가능한 영역에 가장자리에서 얼마만큼까지 허용할 것인지 지정)

```
//픽셀 이용
<motion.div drag ="x" dragConstraints = {{ left:0,right:300 }} />

//ref이용
const MyComponent = ()=>{
    const constraintsRef = useRef(null)

    return(
        <motion.div ref={constraintRef}>
        <motion.div drag dragConstraints={constraintsRef} />
        </motion.div>
    )
}

```

dragSnapToOrigin:boolean<br />
true인 경우 드래그 가능한 요소는 드래그를 놓을 때, 원점으로 다시 애니메이션이 됩니다.<br />
dragSnapToOrigin = {true}

dragElastic : DragElastic <br />
외부 제약 조건에서 허용되는 이동 정도. 0 = 움직임 없음, 1 = 전체 움직임. 기본적으로 0.5로 설정됩니다. 움직임을 비활성화하기 위해 false로 설정할 수 도 있습니다.<br />
dragElastic = {0.2}

https://www.framer.com/docs/gestures/#drag

->7.7