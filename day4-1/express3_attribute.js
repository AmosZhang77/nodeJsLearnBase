let express = require('express')
let app = express()

app.listen(8070)

// express 扩展了req , res 的属性和方法
app.get('/signIn', function (req, res) {
  console.log(req.query.id) // 获取问号后的参数。 express扩展
  console.log(req.query.url) // 获取整个路径
  console.log(req.query.path) // 获取去掉问号后面之后的路径。 express扩展
  console.log(req.headers) // 获取请求头，都是小写
  console.log(req.method) // 获取请求方法，都是大写
})

