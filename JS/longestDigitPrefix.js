// longestDigitPrefix codesignal

// my solution
function longestDigitsPrefix(inputString) {
  const arr = inputString.split("");
  let result = "";
  if (/^[0-9]$/.test(arr[0])) {
    result += arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (/^[0-9]$/.test(arr[i])) {
        result += arr[i];
      } else {
        break;
      }
    }
  }
  return result;
}

// someone better's solution
function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0];
}
