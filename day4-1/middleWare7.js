// 中间件 当我们访问刀最终目标之前执行的内容

let express = require('express')
let app = express()
app.listen(8070)

// 1.中间件的第一个功能，可以进行权限判断
// 2.中间件第二个功能，扩充res , req的属性方法进行扩充
// 3.中间件要放在执行路径上面
// 4.中间件默认情况都匹配，相当于'/'
// 统一处理head 等
app.use(function (req,res,next) { // 不调用next，就不继续往下走 // 参1不写默认'/' 能匹配到/food /water。 前面能匹配上就算匹配上。比如设置/water 能匹配到下面/water/a 路径
console.log('过滤石头')
  // res.end('石头') // 如果这里end下面end语句没效果了，但是下面其他流程还走。返回结果是本条

  next()
})
app.use(function (req,res,next) {
  res.header('Content-Type', 'application/json;charset=utf8')
  // next()

  /**
   * 想要错误，跳到最后一个错误中间件的的情况
   */
  next('如果有错误next调用时带参数，会直接跳到下面最后的错误中间件')

})
app.use('/water', function (req,res,next) { // 不调用next，就不继续往下走 // 第一个参数，路径，写了就限制中间件作用的路径，只能匹配到 '/water'
  console.log('过滤沙子')
  next()
})

app.get('/water',function (req,res) {
  res.end('水')
})

app.get('/food',function (req,res) {
  res.end('事物')
})

app.use(function (err,req,res,next) { // 错误中间件有4个参数
  console.log(err) // 跳 报错 内容是 next传过来的参数
})
