let express = require('express')
let app = express()
app.listen(8070)

function bodyParser(){
  return function (req,res,next) {
    let str =''
    req.on('data',function (chunk) {
      str += chunk

    })
    req.on('end',function (chunk) {
      // console.log(str)
      req.body = require('querystring').parse(str) // querystring自带模块。自定义body属性用于存储。建议用第三方body-parser见route2.js
      next() // next 一定要放这里不能放外面，收完数据才next，否则下面的req.body拿不到。

    })
  }
}
app.use(bodyParser())

// /user/login

// 未分模块子路由前
/*app.get('/login', function (req, res) {
  res.send('登录')
})
app.get('/reg', function (req, res) {
  res.send('注册')
})*/

// 模块化拆分子路由
let user = require('./routes/user')
app.use('/user', user)

// /article/ post
/*app.get('/post', function (req, res) {
  res.send('发布文章')
})
app.get('/delete', function (req, res) {
  res.send('删除文章')
})*/

// 模块化拆分子路由
let article = require('./routes/article')
app.use('/article', article)
