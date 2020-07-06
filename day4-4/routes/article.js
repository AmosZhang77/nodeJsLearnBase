let express = require('express')
let router = express.Router() // 创建一个路由池子
// router和app一样，也是函数

// /article/ post
router.get('/post', function (req, res) {
  res.send('发布文章')
})
router.get('/delete', function (req, res) {
  res.send('删除文章')
})

module.exports = router
