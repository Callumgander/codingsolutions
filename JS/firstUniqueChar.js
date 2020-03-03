// first unique char, leetcode
// https://leetcode.com/problems/first-unique-character-in-a-string/


// terrible runtime, terrible memory usage but I did it. Really not happy with this solution, will have to try it again sometime and find something more optimal
var firstUniqChar = function(s) {
    // if the char isn't in the hashtable, put it in it and assign current index as value
    // if it is already in the hashtable, set it's value to -1 to show that it was a duplicate
    // iterate through the characters, if the value of a character is higher than -1, so it's valid
    // and less than min, then set it as min
    // if the min hasn't changed, return -1, otherwise return the minimum
    let hashtable = {};
    let min = s.length;
    for (let i = 0; i < s.length; i++){
        if (hashtable.hasOwnProperty(s[i]) != true){
            hashtable[s[i]] = i;
        } else {
            hashtable[s[i]] = -1 
        }
    }
    for (let c in hashtable){
        if (hashtable[c] > -1 && hashtable[c] < min){
            min = hashtable[c];
        }
    }
    // how do you check 
    return min === s.length ? -1 : min
}