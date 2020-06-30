let express = require('express')
let app = express()
app.listen(8070)

app.use(function (req, res, next) {
  let t = new Date().getTime() // 访问最初的时间
  let end = res.end // 把原有end方法保存下来
  res.end = function (...arg) { // 重写end方法，其他地方的代码，end都可以不用改动
    console.log('useMyEnd')
    console.log(new Date().getTime() - t)

    end.call(res, ...arg) // 最后调原来的end，this指向相对于原来地方会变，用call改回来
  }

  next()

})
/*app.get('/water', function (req, res) {
  // 获得运行时间
  let t = new Date().getTime() // 加这两句实现，无法作用到其他地方的计时，只能重复写达到目的，所以不好。如果要监控所有路径肯定不能这么写
  for (let i = 0; i < 10000; i++) {

  }
  console.log(new Date().getTime() - t)
  res.end('water')
})*/

app.get('/food', function (req, res) {
  for (let i = 0; i < 100000; i++) {

  }
  res.end('food') // 装饰模式，这个end是修改过的end,达到不改这里的代码，插入计时结束点的目的
})

app.use(function (err, req, res, next) { // 错误中间件有4个参数
  console.log(err) // 跳 报错 内容是 next传过来的参数
})
