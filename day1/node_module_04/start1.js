// 在文件中打印，this不是global属性，命令行里面是，因为node自带模块化功能，一共文件就是一共模块，模块this不是global
console.log(this) // 文件中打印 {}
var a = 1 // 每个文件都有局部作用域，不会将属性挂在global上
console.log(global.a) // 拿不到

a = 1 // 会跑到外面去，不要这样写代码 // 其实跑不出去，不会到global上面
console.log('aaa', global.a) // 拿不到

// node全局对象 可以不声明，直接使用

// console.log(global)

// 下面是global里面的内容 // 可以直接用
// console
// process 进程 设置环境变量
// Buffer 缓存区 如文件读写缓存
// clearImmediate setImmediate
// clearTimeout 等

console.time('note1') // time timeEnd 属性用于算时差，note1只是标识名，两个一样的配对使用,算中间代码执行的时差
for(let i = 0; i<100; i++){

}
console.timeEnd('note1')
