function core(...args) {
    console.log('core', ...args);
}

Function.prototype.before = function (cb) {
    return (...args) => {
        cb();
        this(...args);
    }
}
let newCore = core.before(() => {
    console.log('before');
})
newCore('aaa', 'bbb');

//函数的定义有作用域的概念，一个函数的定义的作用域和执行的作用域不在同一个，肯定会出现闭包
function a() {
    function b() {
        console.log('b run ');
    }
}
b(); //此时b()为undefined