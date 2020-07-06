let express = require('express')
let app = express()
app.listen(8070)

// 重定向
app.get('/',function (req,res) {
  // res.redirect('http://www.baidu.com')

  // 下面是原理
  res.setHeader('Location', 'http://www.baidu.com') // 重定向的网址和重定向命令
  res.statusCode = 302 // 重定向的code,告诉浏览器
  res.end()
})
