// 只用于对比express，不用express的写法
let http = require('http')

// 1.当访问 /signIn 返回登录页面
// 2.当访问 /signUp 返回注册页面

let url = require('url')
// console.log(url)
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url,true)
  if(pathname === '/signIn'){
    let str = ''
    req.on('data',function (chunck) {
      str += chunck
      console.log('str', str)

    })
    res.on('end',function () {
      console.log('str-end', str)

    })
    res.setHeader('Content-Type','text/plain;charset=utf8')
    return res.end('登录')
  }
  if(pathname === '/signUp'){
    return res.end('注册')
  }
  res.end('404')
}).listen(8070)
