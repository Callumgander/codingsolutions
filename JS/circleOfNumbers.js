// circleOfNumbers codesignal

// my solution
function circleOfNumbers(n, firstNumber) {
  // basically you take 360 and divide it by n
  var divided = 360 / n;
  // this gives you where on the circle the firstNumber should be
  var whereFirstIs = divided * firstNumber;
  // you take whereFirstIs and if it's lower than 180, you add 180 it,
  // if it's higher than 180, you take 180 from it
  if (whereFirstIs >= 180) {
    var result = whereFirstIs - 180;
  } else {
    var result = whereFirstIs + 180;
  }
  // then you take the result and divide it by the value of 360 / n to get the firstNumber's radial opposite
  return result / divided;
}

// someone much smarter than me's solution
function circleOfNumbers(n, firstNumber) {
  return (n / 2 + firstNumber) % n;
}
