// isLucky codesignal

// my solution
function isLucky(n) {
    // find the half way point for the length
    var sum1 = 0;
    var sum2 = 0;
    let array = n.toString().split("").map(function(t){return parseInt(t)});
    var length = array.length/2 - 1
    console.log(length);
    // start at front, loop through and sum each character in the string until you reach the half way point
    for(var i = 0; i < length + 1; i++){
        sum1 += array[i];
    }
    // start at back, loop through and sum each character of the string until you reach the half way point
    for(var i = array.length - 1; i > length; i--){
        sum2 += array[i];
    }
    console.log(sum1, sum2);
    // if sum1 === sum2 then return true else return false
    if(sum1 === sum2) {
        return true;
    }
    else {
        return false;
    }
}

function isLucky(n) {
    var a=(n+"").split(""),half=a.length/2,l=0,r=0
    while(a.length>half) r+= +a.pop()
    while(a.length) l+= +a.pop()
    return l===r
  }

function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}