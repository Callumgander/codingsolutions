// isIPv4Address codesignal

// not mine
function isIPv4Address(s) {
  var r = s.split(".");
  return (
    r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
  );
}
