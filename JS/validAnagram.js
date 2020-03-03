// validAnagram, leetcode
//https://leetcode.com/problems/valid-anagram/


// dumb, long first solution, super slow, uses lots of memory but works
var isAnagram = function(s, t) {
    // turn both into arrays, sort, loop through if any indexes don't match, return false, else true
    if (s.length != t.length){
        return false
    }
    s = [...s.split("").sort()];
    t = [...t.split("").sort()];
    for(let i = 0; i < s.length; i++){
        if (s[i] != t[i]){
            return false
        }
    }
    return true
};

// a much faster solution that relies on counting instances of a letter in one array and then decrementing them in another and if there are any non 0 values left in the array, returning false
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    // counts instances of each letter in one array, then decrements it as looping through the second array. If there is anything left in the array, then return false, else true
    let counts = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        // s.charAt(i) - 97 will essentially subtract the ascii value of a, 97, away from any char, to give it it's correct position, i.e. b - a would = counts[1] then increment it to show that it was present
        let a = s.charCodeAt(i) - 97;
        let b = t.charCodeAt(i) - 97
        counts[a]++;
        counts[b]--;
    }
    for (let i = 0; i < counts.length; i++){
        if(counts[i] != 0){
            return false
        }
    }
    return true
};
