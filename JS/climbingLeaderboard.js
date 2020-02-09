// climbingLeaderboard on hackerrank
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

// so essentially this "works", it passes the base test cases
// but some of the test cases are massive and the fact that this is at least O(n2)
// makes this way too slow
function climbingLeaderboard(scores, alice) {
    const rankList = [];
    // loop through alice and insert the ith element into a copy of sorted scores array
    for (let i = 0; i < alice.length; i++){
        // make a temp list for each item in alice and sort it into descending order 
        let temp = [...scores];
        temp.push(alice[i])
        temp.sort((a, b) => b-a);
        let rankCounter = 1;
        for (let j = 0; j < temp.length; j++){
          console.log(temp[j],alice[i])
          if (temp[j] === alice[i]) {
            rankList.push(rankCounter);
            break
          } else if (temp[j] === temp[j+1]){
            continue
          } else {
            rankCounter += 1;
          }
        }
    }
  return rankList;
}

// worked for ages and got this but still failed to meet the time requirements
function climbingLeaderboard(scores, alice) {
    const rankList = [];
    console.log(scores);
    console.log(alice)
    for (let i = 0; i < alice.length; i++){
        let temp = [...scores];
        temp.push(alice[i]);
        let tempSet = new Set(temp)
        let scores1 = [...tempSet]
        scores1.sort((a, b) => a-b);
        console.log(scores1);
        let rank = scores1.length - scores1.indexOf(alice[i]);
        if (rank === 0){
          rank = 1;
        }
        rankList.push(rank)
    }
  return rankList;
}

// finally looked up someone else's solution which made the whole problem
// seem really simple but oh well
var rscores = scores.reduce((score, currentScore, i) => {
    if(score[score.length-1] !== currentScore){
        score.push(currentScore);
        return score;
    } else {
        return score;
    }
}, []);
var initRank = rscores.length;
for(var i of alice){
    while(rscores[initRank-1] <= i){
        initRank--;
    }
    console.log(initRank+1);
}