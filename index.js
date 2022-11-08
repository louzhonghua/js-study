// 防抖函数  触发高频事件后n秒内函数只执行一次，如果n秒内再次触发，则重新计时
const debounce = (fn,delay) => {
    let timer = null;
    return function (args) {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            fn.apply(this,args);
        },delay)
    }
}
// 节流函数  也是针对高频事件，但是在n秒内只会触发一次

const throttle = (fn,delay) => {
    let flag = true;
    return function(args){
        if (!flag) return;
        flag=false;
        setTimeout(() => {
            fn.apply(this.args);
            flag=true;
        }, delay);
    }
}

// 分别利用深度优先思想和广度优先思想实现一个拷贝函数
// 拷贝函数的本质利用递归的思想将要拷贝的对象一层一层拷贝出来

const deepClone = (oldObj) => {
    const newObj = {};
    for (const key in oldObj) {
        newObj[key] = typeof oldObj[key] === 'object' ? deepClone(oldObj[key]): oldObj[key];
    }
    return newObj;
}

// 将数组扁平化并去除其中重复的部分，最终得到一个升序且不重复的数组

let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
console.log(arr);
const flatArr = arr.flat(Infinity);
console.log(flatArr); 

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);

const reverse = (num) => {
    return String(num).split('').reverse().join('')
//     const strNum = String(num);
//     const arr = strNum.split('');
//     const reverseArr = arr.reverse();
//     console.log(reverseArr);
//     console.log(arr);
//     return reverseArr.join('');
}
console.log(reverse(1216000))