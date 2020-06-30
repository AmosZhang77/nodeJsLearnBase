let express = require('express')
let app = express()

app.listen(8070)

// 把路径参数分开来

// 拦截功能，将不同路径参数分开处理app.params 方法
app.param('id', function (req, res, next) {
  req.params.id = `your id is ${req.params.id}`
  next() // 调用next就可以向下配置。 不调next下面都不会走。如果在这里end结束了，下面就不会走了
})
app.param('name', function (req, res, next) {
  req.params.name = `you name is${req.params.name}`
  next()
})
app.get('/user/:id/:name', function (req, res) {
  res.header('Content-Type', 'Content-Type', 'application/json;charset=utf8')
  // 相当于 不用express时 res.setHeader('Content-Type', 'Content-Type', 'application/json;charset=utf8')
  res.end(`${req.params.id}${req.params.name}`)
})

// 这里的res req都是同一个
