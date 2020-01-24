// avoidObstacles codesignal

// not mine
function avoidObstacles(arr) {
  for (var n = 1; ; n++) if (arr.every(x => x % n)) return n;
}
