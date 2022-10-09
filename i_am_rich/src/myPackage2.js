// @ts-check

//자바스크립트 파일 안에 JSDoc 코멘트만 더하면 타입스크립트가 도와준다.
/**
 * Initializes the project ->프로젝트를 초기화한다.
 * @param {object} config //입력값(config)의 데이터 타입은 객체가 될 것이다.
 * @param {boolean} config.debug //config객체 안에는 boolean이 있다. boolean타입은 config.debug안에 있다.
 * @param {string} config.url
 * @returns
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}