let express = require('express')
let router = express.Router() // 创建一个路由池子
// router和app一样，也是函数

router.get('/getListByTenantId', function (req, res) {
  console.log(req)

  res.send('发布文章')
})


module.exports = router
