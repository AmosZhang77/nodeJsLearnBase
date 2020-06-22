// 跨域
let http = require('http')
let port = 3000
let fs = require('fs')
let url = require('url')
let path = require('path')
let mime = require('mime')

http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true) // true 将query转成对象
  if (urlObj.pathname === '/jsonp') {
    console.log('ok')
    // res.end(`var a = {name:'zjx'`) // 会在被引入的html中执行，创建全局变量a。（jsonp的缺点，回调函数必须是全局的）
    let data = 'zjx'
    /**
     * jsonp原理
     */
    res.end(`${urlObj.query.cb}('zjx')`) // 拿前端传过来的函数名参数cb，回调，并把接口内容当作参数传回去
    res.end(`${urlObj.query.cb}(${data})`) //${data},html里面报错，找不到zjx;
    res.end(`${urlObj.query.cb}(data)`) // data, html里面报错，找不到data，都不行。要直接字符串。
    return
  }

  // 下面都是处理静态文件
  fs.stat('.' + urlObj.pathname, function (err, stats) {
    if (err) { // 找不到
      res.statusCode = 404
      res.end(`${urlObj.pathname} not found`)
    } else if (stats.isFile()) { // 是文件情况

      // 没不通的类型文件对应设置不同的头，否则中文或者其他文件会乱码。这里是手写
      // let extName = urlObj.pathname.match(/\.\w+$/)[0] // 匹配出后缀名
      // res.setHeader('Content-Type', mime[extName] + ';charset=utf8')

      res.setHeader('Content-Type', mime.getType(urlObj.pathname) + ';charset=utf8')
      fs.createReadStream('.' + urlObj.pathname).pipe(res)

    } else if (stats.isDirectory()) { // 是文件夹默认查找index.html。 /也是文件夹
      // console.log('url', '.' + urlObj.pathname + 'index.html')
      let url = path.join('.' + urlObj.pathname + './index.html')
      // fs.createReadStream('.' + urlObj.pathname + 'index.html').pipe(res)
      fs.createReadStream(url).pipe(res)
    }
  })
  // console.log(urlObj)
  // console.log(req.url)

}).listen(port, () => {
  // 服务启动后会调这个函数
  console.log('服务器已经启动在${port}上')

})
// 端口号尽量使用3000以上端口
