// process 进程 设置环境变量




// 在命令行里配置NODE_ENV，mac export/ windows set
// 命令行里面自定义一个环境变量 NODE_ENV=dev // 不要加空格，字符串不要引号
// 在命令行里输入 set NODE_ENV=dev

// NODE_ENV 这个是自定义的变量名和变量值
console.log(process.env.NODE_ENV)

// 在当前项目文件夹命令行里输入 node process。js
// 输出 dev // 当前文件不行，因为不是一个环境。命令行是在项目文件夹打开的，环境是文件夹。文件直接打开环境就是文件这个模块


// 在webstrom 中设置环境变量

let url = ''
if (process.v.NODE_ENV === 'dev') { // 判断是否是开发环境
  url = 'http://localhost:3000'

} else {
  url = 'http://www.zhufeng.cn'
}

// 异步的，当前队列同步代码执行完了之后，就开始执行下一个异步队列
process.nextTick(
  function () {
    console.log('nexTick异步紧跟') // 第二打印， 异步，当前队列底部
    // this 指向global
  }
)
console.log('同步') // 先打印

// 第二个队列中的
/*
setImmediate( // 不能加时间参数
  function () {
    console.log('setImmediate异步') // 第三打印
    // this 指向自己：setImmediate对象 // 建议用箭头函数，如下
  }
)
  */

setImmediate(() => {
    console.log('setImmediate异步') // 第三打印
    // this 指向外层
  }
)

setTimeout((...b) => { // ... 形参中作用是剩余运算符，拿所有参数

  // ... 展开运算符作用 [...[1,2,3], ...[4,5,6] // 结果 [1,2,3,4,5,6] //es6
  // ... 展开运算符作用 [...{name: 'a'}, ...{age: 2} // 结果 {name: 'a',{age: 2}}//es7

  console.log('setTimeout异步') // 第三打印
  // this 指向自己：setTimeout对象
  console.log(arguments.length)// 拿到的是外层的argument的长度不是settimeout的//箭头函数没有arguments
  console.log(b.length)// 加剩余运算符 ... 拿本函数所有参数，再拿到length


}, 0, '参数值，形参b','参数值，后面可以一直加参数') // 如果没设置时间或者设置0 运行先后和setImmediate 随机先后，否则后执行。
