// express在res上的扩展
let express = require('express')
let app = express()
app.listen(8070)

// http 不能直接返回对象, 扩充了 res.json() ，可以 返回json
// 返回html页面res.sendFile() // 返回文件
// res.statusCode res.end => res.sendStatus()
// res.end() res.header()
// res.send()

app.get('/json', function (req, res) {
  res.json({ name: '名字', age: 9 }) // 自动设了识别中文的头，自动转成json
})

app.get('/', function (req, res) { // 回复文件

  res.sendFile(__dirname + '/express1.html') // 这里参1是文件路径，只能写绝对路径，或者后面有root的相对路径

  /**
   *  root相对路径的写法。 这种写法不能找上级，../express1.html ，不允许，意思是设了root,就不给往上面找了
   */
  // res.sendFile('./express1.html', {root: __dirname})

  /**
   * 用绝对路径找上级文件夹，这样用../,用path模块拼绝对路径
   */
  // res.sendFile(require('path').join(__dirname, '..', 'index.html')) //
})

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/express1.html') // 这里参1是文件路径，只能写绝对路径，或者后面有root的相对路径
  // res.sendFile('./express1.html', {root: __dirname}) // root相对路径的写法。 这种写法不能找上级，../express1.html ，不允许，意思是设了root,就不给往上面找了
  res.sendFile(require('path').join(__dirname, '..', 'index.html')) // 用绝对路径找上级文件夹，这样用../,用path模块拼绝对路径
})

app.get('/status',function (req,res) {
  res.sendStatus(500) // 返回一个页面，页面会展示Internal Server Error。 调接口，network报500
})

app.get('/send',function (req,res) {
  // send会判断参数，自动处理
  res.send(500) // 返回一个页面，页面会展示Internal Server Error。 调接口，network报500
  // 中文也会自动加头
})

// 一般都用send 和 sendFile 方法
