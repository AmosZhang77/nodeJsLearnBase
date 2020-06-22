let http = require('http') // 引用node的http模块
let port = 3000
let fs = require('fs')
let url = require('url') // node处理路径模块
http.createServer((req, res) => {
    /*    fs.readFile(
          'index.html', function (err, data) {
            res.end(data)
          }
        ) */
// 后端返回html
  console.log(urlObj)
    // console.log(req.url)
    fs.createReadStream('index.html').pipe(res) // 与上面效果一样
  }
).listen(port, () => {
  // 服务启动后会调这个函数
  console.log('服务器已经启动在${port}上')

})
// 端口号尽量使用3000以上端口
