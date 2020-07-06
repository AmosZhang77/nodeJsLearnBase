## express搭建服务
```
let express = express()
app.listen(8080)
```

## express路由
- 必须方法名（method），路径(path)全都匹配上，才执行对应的
callback
```
app[method](path, function(){})
app.all('*', function(){}) // 兜底，放最后匹配所有
```

## 路径参数路由
- 将匹配到的结果生成一个对象放到req.params上
```
app.get('/user/:id/name)
```

##  req上的属性
- 将匹配到的结果生成一个对象放到req.params上
```
req.params 路径参数
req.rul 整个路径
req.path 整个pathname路径
req.header 请求头
req.meethod 请求的方法
req.query 请求的参数,问号后面的参数
```

## middleware
- 中间件的作用
  - 处理公共逻辑，扩展req,res
  - 可以决定是否继续执行，调用next()继续执行
  - 匹配路由的路径,'/'  能匹配到所有路由。开头匹配到就会执行中间件
  - 错误中间件，在最后，参数4个，第一个参数是错误

## res新增的方法
- res.json() 返回对象
- res.sendFile() 绝对路径，可以用path.join或path.resolve来实现
- res.sendStatus() 发状态码
- res.send() 包括 res.json() 和 res.sendStatus()的功能，自动判断

## 用户管理模块
- 登录 /login
- 注册 /reg
## 文章管理模块
- 发表文章 /post
- 删除文件 /delete
