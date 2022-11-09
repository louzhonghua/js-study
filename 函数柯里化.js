// 函数柯里化 多个参数的传入，把它转化为n个函数，可以暂存变量

function fn(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
// console.log(fn(1, 2, 3));
const fn1 = fn(1);
const fn2 = fn1(2);
const fn3 = fn2(3);
console.log(fn3);
console.log(fn(1)(2)(3));

//判断一个变量的类型
/*
    typeof 用于判断基本类型
    instanceof XXX是X的实例  检测构造函数的prototype属性是否出现在某个实例对象的原型链上
    Object.prototype.toString.call(this.instance)
*/

function isType(typing, val) {
    console.log('Object.prototype.toString.call(val)',Object.prototype.toString.call(val))
    console.log(`[object ${typing}]`)
    console.log('typing',typing)
    console.log('val',val)
    return Object.prototype.toString.call(val) == `[object ${typing}]`
}

//柯里化isType函数， 由于我们不想每次都让用户输入值和对应的类型，因此我们将上述函数拆分为判断各自类型的函数，例如单独判断当前输入是否是字符串
function typeSet(typing) {
    return function (val) {
        return Object.prototype.toString.call(val) == `[object ${typing}]`
    }
}

// 记录每次调用传入的参数，并且和函数的参数个数进行比较，如果不满足总个数，就返回新函数，如果
// 传入的个数和参数一致，执行原来的函数

function curring(fn) {
    const inner = (args = []) => {
        return args.length >= fn.length ? fn(...args) : (...userArgs) => inner([...args, ...userArgs])
    };
    return inner();
}

//实现通用的柯里化函数，传入参数返回一个新的函数
// let isString = typeSet('String');
// let isNumber = typeSet('Number');
// let isObject = typeSet('Object');
let isString = curring(isType)('String');
console.log('isString',isString)
console.log("isString('wwe')", isString('wwe'))


//此时用户可以调用对应的函数判断当前字符串是否为对应的类型typing 
console.log("isString('assss')", isString('assss'))

function sum(a, b, c, d) {
    return a + b + c + d;
}

//对sum进行柯里化,然后每次传入的参数个数不是固定的
let sum1 = curring(sum);
let sum2 = sum1(1);
let sum3 = sum2(2, 3);
let result = sum3(4);
console.log('result', result)



