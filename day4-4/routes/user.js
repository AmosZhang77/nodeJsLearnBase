let express = require('express')
let router = express.Router() // 创建一个路由池子
// router和app一样，也是函数
let path = require('path')
// /user/login
router.get('/login', function (req, res) {
  res.send('登录')
})
router.get('/reg', function (req, res) {
  console.log(req.body)
  // res.sendFile(path.resolve('../views/reg.html'))
  // 不正确，这个路径会少一级，这里打印出来对的，但是是route1.js起的服务，跑起来,当前目录变成route1.js所在的上一层目录了，所以少一层。
  // 跟据运行的文件的位置来解析的，所以此时不能用resolve

  // res.sendFile(path.resolve(__dirname, '../views/reg.html')) // 正确
  res.sendFile(path.join(__dirname, '../views/reg.html')) // 正确

})
router.post('/reg', function (req, res) {
  console.log(req.body)

})
module.exports = router
