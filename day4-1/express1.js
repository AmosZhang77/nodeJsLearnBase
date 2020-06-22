// 安装 ejs body-parser express
let express = require('express') // 引用express模块，是函数
let app = express() // express 执行后返回http监听函数，就是http.createServer中的函数

// 在此函数上扩展了一个listen可以监听端口
app.listen(8070,function () {
  console.log('start')

})
// require('http').createServer(app).listen(8070) // 其实应该是这样的，express.listen是语法糖，实现如下
/*
app.listen1 = function (...args) {
  require('http').createServer(app).listen(...args)
}
app.listen1(8070,function () {
  console.log('start')

})
*/
