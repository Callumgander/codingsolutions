//arrayMaxConsecutiveSum codesignal

// NOT MY SOLUTION
function arrayMaxConsecutiveSum(inputArray, k) {
  s = m = inputArray.slice(0, k).reduce((x, y) => x + y);
  for (i = k; i < inputArray.length; i++) {
    s += inputArray[i] - inputArray[i - k];
    if (s > m) {
      m = s;
    }
  }
  return m;
}
