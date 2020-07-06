// ejs模板，先安装 npm install ejs

let express = require('express')
let app = express()
app.listen(8070)

app.engine('html',require('ejs').__express)// 告诉她页面上所有render方法中的html都用ejs模板来渲染

let bodyParser = require('body-parser') // 推荐第三方处理表单，json，等各种请求数据格式

// bodyParser模块解析表单格式的中间件，把表单内的数据解析后，放在req.body上
app.use(bodyParser.urlencoded({extended:false})) // extended是默认参数不用管

// bodyParser模块解析json的中间件，把json字符串的数据解析成对象，放在req.body上
app.use(bodyParser.json())

// /user/login
// 模块化拆分子路由
let user = require('./routes/user')
app.use('/user', user)

// /article/ post
// 模块化拆分子路由
let article = require('./routes/article')
app.use('/article', article)
