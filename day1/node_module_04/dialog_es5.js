// 写好的方法

function Dialog () {
  this.time = 3000 // 私有
}
Dialog.title = '弹框' // 只能用类调到，实例调不到
Dialog.prototype.$show = function () {
  console.log('show')
}

Dialog.prototype.$hide = function () {
  console.log('hide')
}
console.log(2)

// 两种抛出方法 1. 直接修改modal.export 2 . 为export添加一个属性，把结果存进去。
// 直接把结果赋值给 exports是错误的，因为modal.exports并不会因此被赋值，因为引用类型并且模块化约定抛出的是modal.exports，
// 把exports整个替换掉，modal.exports不会变。他们开始是两个命名空间指向同一个对象

// 方法一
// exports.Dialog = Dialog
// 方法二
module.exports = Dialog

// export = Dialog 这样写时错的，原因如上

/**
 闭包实现模块化
 伪代码

 本模块在其他模块引入时相当于，本模块自执行函数执行一遍，插入到引入模块。 除此之外还有两件node模块化自动做的事情
 (function(exports, module, require)){ // 一共5个参数这里省略了
    module.exports = exports = this = {} //  node模块化自动做的，这里产生了exports 和 module.exports 两个不同的命名空间指向同一个对象。

 // 模块里面的代码
    function Dialog () {
      this.time = 3000 // 私有
    }
    Dialog.title = '弹框' // 只能用类调到，实例调不到
    Dialog.prototype.$show = function () {
      console.log('show')
    }

    Dialog.prototype.$hide = function () {
      console.log('hide')
    }
    console.log(2)
    module.exports = Dialog

    return module.exports // node模块化自动做的
 }

 */
