/** 调用写好的方法
 // 自己写的文件要用 ./ 方式找 ../ 相对路径，可以省略.js .json .node后缀，依次匹配，如果有同名还是要写，否则按.js .json .node找到js类型的文件就不找下一个类型的了。

 */
require('./dialog_es6') // 同步模块方法
console.log(1)  // 先打印上面文件里面的2 再打印1，require是同步模块方法
// 如果异步方法一般会有回调函数

let DiaLog = require('./dialog_es6')
console.log(DiaLog) // {} 其实就是默认拿模块的exports对象

// 方法1
// let dialog = new DiaLog.Dialog

// 方法2
let dialog = new DiaLog

// 使用模块化的时候，es5 和 6一样

dialog.$show()

console.log('静态属性', DiaLog.title) // 这个拿到的不是静态属性，是模块中定义获取静态属性的方法
console.log('静态属性', DiaLog.title()) // 这里不同，需要加个括号
console.log(dialog.title) // undefined 类的静态属性实例中是拿不到的
