# 01 - Chapter 컴퓨터 네트워크와 인터넷
## 인터넷
전 세계적으로 수백만 개의 컴퓨팅 장치들을 연결하는 컴퓨터 네트워크이다.
## 네트워크

## 호스트, 종단 시스템
## 통신 링크, 패킷 스위치
## 패킷
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/ab13f537-301d-49e6-9a5a-8512537be1c4)

## 라우터
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/37a2eba3-1c7c-46cc-b1af-e35071aed60a)

## 링크 계층 스위치
## 라우트
## 경로
## ISP
## TCP
## IP
## RFC
## 인트라넷
## 분산 애플리케이션
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/5f9ce933-d140-4055-be07-e4be4f74c316)

### API
### 프로토콜
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/01361d82-7579-41eb-bc0f-ef3485a5b50c)

## 연결지향형 서비스
### 스위칭(교환)
### 라우팅(경로설정)

## 접속 네트워크
### 가정 접속
### 기관 접속
### 무선 접속
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/c5004720-6cea-4bdf-9ce1-deb83fe761b7)

## DSL
## HFC
## LAN
<img width="600" alt="스크린샷 2024-03-10 오후 4 14 47" src="https://github.com/spdhsrnvl123/Study/assets/83896466/3509ae3f-3ec6-42b3-95ff-074a87014f58">

<img width="600" alt="스크린샷 2024-03-10 오후 4 16 03" src="https://github.com/spdhsrnvl123/Study/assets/83896466/5c5453bd-e28c-4121-acf0-103b84e0c9e4">


## WAN
<img width="909" alt="스크린샷 2024-03-10 오후 4 16 18" src="https://github.com/spdhsrnvl123/Study/assets/83896466/7d084a80-7ebb-4d69-98ff-ad3b886da735">


## 꼬임쌍 동선
### UTP
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/cc59f0ea-8153-4bfd-8f9d-87791f9f075a)
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/adfbf1f8-2bbc-4bdb-aad3-b8ff771c39e4)

### 동축케이블
### 광섬유
![image](https://github.com/spdhsrnvl123/Study/assets/83896466/66a86c0f-ab55-4042-9d0f-85d6966e4121)
### 회선교환
### 패킷교환
### 대역폭
### FDM
### TDM
### 처리 지연
### 큐잉 지연
### 전송 지연
### 전파 지연

### 네크워크 프로토콜 통신 방식
- 캡슐화(Encapsulation) : 네트쿼크 통신(보낼 때)을 할 때 높은 계층에서부터 낮은 계층으로 프로토콜들을 생성하는 과정
- 디캡슐화(Decapsulation) : 네트쿼크 통신(받을 때)을 할 때 낮은 계층에서부터 높은 계층으로 프로토콜들을 분석하는 과정

### 네트워크 프로토콜 구조
[헤더][페이로드][풋터]
- 페이로드 : 프로토콜 상위게층에서 내려온 데이터
- 풋터 :테일이라고도 부르며, 추가적인 정보를 가진 데이터

## OSI7계층
### 응용 계층
여러가지 서비스를 제공하는 실질적인 프로그램, 사용자 인터페이스
### 표현 계층
데이터를 어떤 형식으로 전달할지 정하는 계층 ex) 그림파일(jpeg,png), 압축파일(zip,tar.gz), 일반 텍스트
### 세션 계층
논리적인 연결을 정의하는 계층, 네트워크 장치들간의 연결 설정의 유지 동화 등을 어떻게 수행할지를 정의
### 전송 계층
포트주소를 이용해서 통신, 오류 제어(신뢰성 유무), 특정 프로그램 간의 통신(웹 브라우저 and 웹 서버)
### 네트워크 계층
IP주소를 이용해서 통신, 전송 경로를 선택 어느 경로로 가는 것이 최선인지를 결정, 특정 네트워크를 찾아가는 역할

<img width="929" alt="스크린샷 2024-03-10 오후 4 34 56" src="https://github.com/spdhsrnvl123/Study/assets/83896466/8cc532cc-c04e-4835-a427-8bdd753c55bf">


### 데이터 링크 계층
MAC주소를 이용해서 통신, 특정 네트워크에서 특정PC를 찾아가는 역할
 <img width="897" alt="스크린샷 2024-03-10 오후 4 32 14" src="https://github.com/spdhsrnvl123/Study/assets/83896466/a478cd78-0dd9-4ba6-b8e1-79d901c6ab57">

<img width="907" alt="스크린샷 2024-03-10 오후 4 33 05" src="https://github.com/spdhsrnvl123/Study/assets/83896466/5c3b419c-cf25-41f0-b9e5-bc71209242d8">



### 물리 계층
상위 계층에서 캡슐화된 데이터를 bit단위로 변경, 전기신호로 전송하고 받은 전기신호를 bit단위로 해석하는 역할

<img width="600" alt="스크린샷 2024-03-10 오후 4 25 52" src="https://github.com/spdhsrnvl123/Study/assets/83896466/7af1ec05-9feb-4f8d-ba43-142d5b2edcf9">



### 메시지
### 세그먼트
### 데이터그램
### 프레임
