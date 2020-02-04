// arrayMaximalAdjacentDifference, codesignal

// mine
function arrayMaximalAdjacentDifference(inputArray) {
  // loop through array
  maxAbsDiff = 0;
  for (let i = 0; i < inputArray.length; i++) {
    var mini = [inputArray[i], inputArray[i + 1]];
    var result = Math.max(...mini) - Math.min(...mini);
    if (result > maxAbsDiff) {
      maxAbsDiff = result;
    }
  }
  return maxAbsDiff;
}

// someone better
function arrayMaximalAdjacentDifference(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}
