// main handler
function solution(s, skip, index) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result =
      result + String.fromCharCode(checkOverRange(s[i].charCodeAt(0) + index));
  }
  checkSkip('', skip);
  return result;
}

// check the skip
function checkSkip(char, skipArr) {
  for (let i = 0; i < skipArr.length; i++) {
    if (skipArr[i] === char) {
      return true;
    }
  }
}

// get the char
function checkOverRange(number) {
  if (number > 122) {
    return 97;
  }
  return number;
}
