import { init } from "myPackage";
import { exit } from "process";
/*
타입스크립트가 보호해 주지 못하는 이유는
strict 모드로 설정되지 않아서다.
*/

init({
  url: "true",
});

exit(1);

localStorage;
