// makeArrayConsecutive2 on codesignal

// my solution
function makeArrayConsecutive2(statues) {
    statues.sort(function(a, b){return a - b});
    var totalneeded = 0;
    for (i=0; i < statues.length - 1; i++){
        var result = statues[i + 1] - statues[i];
        if (result > 1){
            totalneeded += result - 1;
        }
    }
    return totalneeded
}

// the WAAAAAY better solution online
function makeArrayConsecutive2(sequence) {
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
  }
  