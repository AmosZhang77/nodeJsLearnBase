let http = require('http') // 引用node的http模块
let port = 3000
http.createServer((req, res) => {
    // 监听函数，当请求来到时会执行回调函数
// req代表的是客户端，他是一个可读流
  // res代表的是服务端，他是一个可写流
 /* res.write('hello')
  res.end() // 调用end后结束响应*/

  res.setHeader('Content-type','text/plain;charset=utf8') // 告诉浏览器请求返回的类型，否则可能会乱码。node里面一般是utf8
  res.end('你好')// 可以直接写完返回去
  }
).listen(port, () => {
  // 服务启动后会调这个函数
  console.log('服务器已经启动在${port}上')

})
// 端口号尽量使用3000以上端口
