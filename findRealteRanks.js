var findRelativeRanks = function(score) {
    const sortArr = [...score].sort((a,b) => b-a);
    for(let i =0;i<score.length;i++) {
        const curVal = score[i];
        const level = sortArr.indexOf(curVal)+1;
        switch(level) {
            case 1:
                score[i] = 'Gold Medal';
                break;
            case 2:
                score[i] = 'Silver Medal';
                break;
            case 3:
                score[i] = 'Bronze  Medal';
                break;
            default: 
                score[i] = level + ''
                break;
        }
    }
    return score
};
console.log(findRelativeRanks([5,4,3,2,1]));