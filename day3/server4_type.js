let http = require('http') // 引用node的http模块
let port = 3000
let fs = require('fs')
let url = require('url') // node处理路径模块
let path = require('path')

/*
  首页mime库例子，实际不要自己写
   let mime = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.html': 'text/html'
}*/
// 用mine库
let mime = require('mime')

http.createServer((req, res) => {

  // 后台服务器不识别这里的 ../路径./路径，到/就停掉了
  let urlObj = url.parse(req.url, true) // true 将query转成对象
  // http://www.baidu.com/index?a=1&b=2
  // urlObj.pathname // index
  // urlObj.query // {a=1,b=2}
  // 根据不通的路径返回不同的内容
  // 如果访问的是/ 显示主页html
  // 如果访问文件，将文件读取返回
  // 如果是文件夹默认去找index.html
  // 文件不存在返回404

  // console.log('  console.log( urlObj.pathname)', urlObj.pathname)
  //pathname 是带前 / 的，会变成去c盘找，去掉。或者加点
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
      console.log('url', '.' + urlObj.pathname + 'index.html')
      let url = path.join('.' + urlObj.pathname + './index.html')
      // fs.createReadStream('.' + urlObj.pathname + 'index.html').pipe(res)
      fs.createReadStream(url).pipe(res)
    }
  })
  console.log(urlObj)
  // console.log(req.url)

}).listen(port, () => {
  // 服务启动后会调这个函数
  console.log('服务器已经启动在${port}上')

})
// 端口号尽量使用3000以上端口
