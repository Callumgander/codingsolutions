//alphabeticShift codesignal

// my solution
function alphabeticShift(inputString) {
  var letters = [...inputString.split("")];
  var output = [];
  letters.forEach(function(letter) {
    if (letter.charCodeAt() === 122) {
      output.push(String.fromCharCode(97));
    } else {
      output.push(String.fromCharCode(letter.charCodeAt() + 1));
    }
  });
  return output.join("");
}

// better solution
function alphabeticShift(s) {
  var c = "abcdefghijklmnopqrstuvwxyza";
  return s.replace(/./g, x => c[c.indexOf(x) + 1]);
}
