var plusOne = function(digits) {
    const len = digits.length;
    //逆序遍历
    for(let i = len-1; i >=0;i++) {
        if (digits[i] !== 9) {
            digits[i]++;
            for(let j =i+1;j<len;j++) {
                digits[j]=0;
            }
            return digits;
        }
    }
    const newArr = new Array(len+1).fill(0)
    newArr[0]=1;
    return newArr
};
console.log(plusOne([9]));