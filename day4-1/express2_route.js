let express = require('express')
let app = express()

app.listen(8070,function () {
  console.log('start')

})

// app监听函数上扩展了很多方法，包括get,post,delete, put等, RESTful风格的动词
// 从上往下匹配，匹配到了结束了响应就不会往下走
// 匹配路径是指pathname 不管问候后面的参数。http://localhost:8070/signIn?a=3也能匹配到下面这个登录
app.get('/signIn', function (req, res) {
  res.end('登录')
})
app.get('/signUp', function (req, res) {
  res.end('注册')
})
app.post('/signUp', function (req, res) {
  res.end('注册')
})

//兜底，全部方法，全部路径
app.all('*', function (req,res) {
  res.end('404')
})
