// allLongestStrings my solution, codesignal


// mine
function allLongestStrings(inputArray) {
    var maxstrlen = 0;
    var longstr = [];
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > maxstrlen){
            maxstrlen = inputArray[i].length};
    }
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length === maxstrlen){
            longstr.push(inputArray[i]);
        }
    }
    return longstr
}

// someone smarter than me
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}