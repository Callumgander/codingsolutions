// alternatingSums

// my solution
function alternatingSums(a) {
  [sum1, sum2] = [0, 0];
  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum1 += a[i];
    } else {
      sum2 += a[i];
    }
  }
  return [sum1, sum2];
}

// someone smarter than me
alternatingSums = a => a.reduce((p, v, i) => ((p[i & 1] += v), p), [0, 0]);
