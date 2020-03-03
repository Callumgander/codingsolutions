// how to remove duplicates
var arr = [3,3,3,4];
var noDups = [...new Set(arr)];

// dealing with situations where two loops should be required
// for some situations where there are two loops, you can probably remove one of the loops
// by adding conditionals to the first loop

// how do you iterate through a string without turning it into an array
for (var i = 0; i < str.length; i++) {
    alert(str.charAt(i));
}

// making a new array of a fixed length and populating it with a certain value
let counts = new Array(26).fill(0);

