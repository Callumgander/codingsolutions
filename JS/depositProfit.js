// depositProfit codesignal

// mine
function depositProfit(deposit, rate, threshold) {
  // deposit times rate takes how many years to = threshold
  var total = deposit;
  var years = 0;
  while (total < threshold) {
    total = total * (1 + rate / 100);
    years += 1;
    console.log(total);
  }
  return years;
}

// someone better than me
function depositProfit(d, r, t) {
  return Math.ceil(Math.log(t / d) / Math.log(r / 100 + 1));
}
