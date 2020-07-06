let express = require('express')
let app = express()
app.listen(8070)
let fs = require('fs')
// 静态服务中间件大致原理，实际使用看static_express
// 启动静态服务中间件，网址输入http://localhost:8070/index.html 能访问到静态html

function static (p) { // dist目录下的是静态文件
  return function (req, res, next) {
    let path = require('path').join(p, req.path) // 拼我们要读取的文件路径
    console.log('path', path)
    fs.stat(path, function (err, stats) {
      if (err) { // 没有文件，跳过较过下面处理
        return next()
      }
      if (stats.isFile()) {
         fs.createReadStream(path).pipe(res)
      }
    })
  }
}

app.use(static('dist')) // 不直接写函数，而是再调一个，可以传参。直接写一个函数的话，这里只能写成
app.use(static('public')) // 这里访问网址http://localhost:8070/login.html 能访问到,html css不能和上面index同名，要不然走上面就就鳄属了。
