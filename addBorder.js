// addborder codesignal
// mine
function addBorder(picture) {
  if (picture.length < 0) return;
  picture.unshift("*".repeat(picture[0].length + 2));
  picture.push("*".repeat(picture[picture.length - 1].length + 2));
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*" + picture[i] + "*";
  }
  return picture;
}

// someone better than me
function addBorder(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map(line => `*${line}*`),
    "*".repeat(width)
  ];
}
