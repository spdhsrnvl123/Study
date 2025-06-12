### Windows PowerShell은 .ps1 파일(스크립트 파일)이 자동으로 실행되지 못하도록 기본적으로 제한된 실행 정책(Execution Policy) 을 적용

1. PowerShell을 관리자 권한으로 실행
시작 메뉴 → PowerShell → 마우스 우클릭 → 관리자 권한으로 실행

2. 아래 명령어로 실행 정책을 완화
powershell

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

3. `npm -v` 확인
```
npm -v
```
