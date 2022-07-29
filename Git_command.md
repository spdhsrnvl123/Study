### git config --global user.name "Leutbing"
Git 사용자 정보 등록
닉네임 입력.

### git config --global user.email spdhsrnvl123@naver.com
이메일 입력.

### git init
Git 초기화 실행.
.git이라는 숨겨진 폴더가 만들어진다.

### git status
변경된 파일 확인

### git add .
.은 변경사항이 있는 파일 전부를 대상
특정파일만 하고 싶다면 특정파일 이름을 쓰면 된다

### git commit -m "커밋 메시지"
커밋 메시지

### git log
생성한 커밋 보기

### git push 원격저장소명 브랜치명

### git remote add origin https://github.com/아이디/이름.git
원격저장소와 로컬저장소를 연결.
※ http~ 내 깃허브 저장소 주소 입력.

### git push origin master
만든 커밋 푸시하기

### git branch -M main
branch:커밋을 담는공간 기본 브랜치로 'main'브랜치가 있음

### git push -u origin main
main브랜치에 담긴 커밋들을 원격서버에 push하겠다

### git push
깃허브 업로드

### git clone https://github.com/아이디/이름.git .
gitHub 저장소 내 컴퓨터에 받아오기:클론(Clone)
맨 뒤에 '.'은 점을 찍어줘야 현재 폴더에 내려받는다. 안 찍으면 새 폴더 생성.
※ http~ 내 깃허브 저장소 주소 입력.

### git pull origin master
원격 저장소의 변경사항 내 컴퓨터에 받아오기

참고:https://doing7.tistory.com/6
