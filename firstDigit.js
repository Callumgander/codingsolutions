// firstDigit on codesignal

// my solution
function firstDigit(inputString) {
  const tokens = inputString.split("");
  for (let token of tokens) {
    if (Number.isInteger(parseInt(token))) {
      return token;
    }
  }
}

// someone else's solution
function firstDigit(s) {
  return s.match(/\d/)[0];
}
