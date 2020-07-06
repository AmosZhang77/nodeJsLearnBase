## 拆分路由
```
let express = require('express')
let app = express()
let router = express.Router()
router.get('/login', fn) // /user/login 就会走这个fn

app.use('/user', router)
app.listen(8080)
```

## bodyParser

```
// 解析json 跟据请求头位application/json来确定的
app.use(bodyParser.json()) 

// 解析表单 application/www-x-form-urlencoded
app.use(bodyParser.urlencoded({extented: true})) 

```

## 静态文件中间件

```
app.use(express.static('文件夹'))

```

## 重定向

```
res.redirect('路径')

```
