// evenDigitsOnly codesignal

// my solution
function evenDigitsOnly(n) {
  var output = [],
    sNumber = n.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(sNumber.charAt(i));
  }
  for (let i = 0; i < output.length; i++) {
    if (output[i] % 2 === 1) {
      return false;
    }
  }
  return true;
}

// a better solution
function evenDigitsOnly(n) {
  return !(n + "").match(/[13579]/);
}
