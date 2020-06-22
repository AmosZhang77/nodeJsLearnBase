let http = require('http')
let port = 3000
let fs = require('fs')
let url = require('url')
let path = require('path')

let mime = require('mime')

let users = [
  {
    username: 'zjx在',
    id: 1,
    password: 'zjx'
  },
  {
    username: 'zjy在',
    id: 2,
    password: 'zjy'
  },
]

http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true) // true 将query转成对象
  if (urlObj.pathname === '/user') { // 如果 /user 就是对用户的增删改查
    let id = urlObj.query.id // 查出参数中id，有就是查一条，没查所有
    switch (req.method) {
      case 'GET':
        if (!id) { // 查询所有
          /**
           *  前后台传输必须转成字符串
           */
          res.setHeader('Content-Type', 'application/json;charset=utf8')
console.log('u',users)
          res.end(JSON.stringify(users))
        }
        break
      case 'POST':
        let str = ''
        req.on('data', function (chunk) {
          str += chunk
        })
        req.on('end', function () {
          let user = JSON.parse(str) // 将字符串转化成对象，少一个id
          // 有数据最后一项id+1，没有第一个从1开始
          user.id = user.length ? user[user.length - 1].id + 1 : 1
          users.push(user)
          console.log('user', user)
          res.end(JSON.stringify(user)) // 把添加成功的用户返回去
        })
        break
      case 'DELETE':
        break
      case 'PUT':
        break

    }
    return
  }
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
