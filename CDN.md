# CDN

**CDN(Content Delivery Network)이란 콘텐츠를 효율적으로 전달하기 위해 분산된 서버에 데이터를 저장해 사용자에게 전달하는 시스템**이다. 예를 들어 집에서 유튜브 영상을 시청한다 생각해보자. 미국 본사에 있는 서버에서 동영상 데이터를 가져오는 것 보다는 우리나라 서버에서 영상 데이터를 가져오는 것이 더 빠르다. 이렇듯 같은 데이터를 가진 서버를 여러 장소에 분산시키고 **데이터 요청이 왔을 때 요청 위치로부터 가장 가까운 서버에 데이터를 전송**해주는 것이다. 이를 통해 데이터를 효율적으로 제공할 수 있으며 한꺼번에 많은 사용자가 몰림으로 병목현상도 방지 할 수 있다.

※ 병목현상 : 담을 수 있는 데이터의 양은 적으나 한꺼번에 많은 양의 데이터가 유입 됨으로써 컴퓨터가 느려지는 현상.

## Javascript Library와 CDN 

프로그래밍에서 Library란 이미 구현된 코드모음이다. 예를 들어 상대적 날짜(10일 전, 1분 전 등)를 구현해야 하는 업무를 받았다고 생각해보자. 상대적 날짜 기능을 자신이 코드를 짜서 만들 수도 있지만 상대적 날짜라는 기능은 우리 프로젝트에만 쓰는 기능이 아니기 때문에 이미 다른 많은 사람들이 기능을 구현한 적이 있을 것이다 우리 이전에 코드를 구현한 사람들 중 어떤 사람은 상대적 날짜와 관련 기능들을 모아 moment.js라는 javascript라이브러리로 인터넷에 배포하였다. 즉, 우리는 굳이 상대적 날짜를 코딩하지 않고 moment.js라는 라이브러리를 다운로드 받아 사용하면 상대적 날짜 기능을 구현할 수 있는 것이다.

javascript Library는 자신의 서버에서 제공할 것인지, 외부 CDN으로부터 포함시킬지에 따라 사용방법이 조금 다르다. 전자의 경우 자신의 서버에서 제공한다는 것은 즉, BackEnd에서 Library을 우리의 서버 컴퓨터에 설치하고 이를 사용자에게 제공하는 것이다. 예를 들어 npm을 통해 moment.js를 install한 후 require를 통해 해당 모듈을 가져와 코드를 작성하는 것이 이에 속한다. 후자는 FrontEnd에서 HTML의 Script태그의 src속성에 moment.js를 제공할 위치를 입력하면 된다.(CDN)

```jsx
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous"></script>
```

※[https://study-ihl.tistory.com/38](https://study-ihl.tistory.com/38)
