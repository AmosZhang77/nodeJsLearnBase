let express = require('express')
let app = express()
app.listen(8070)

// 一般静态文件渲染都用express自带唯一一个中间件，静态文件中间件
// 和自己写的一样，下面两句，两个文件夹下，文件名不能相同，否则后面的一个文件夹相同的内容拿不到。先拿上面了。具体见static大致原理
app.use(express.static('dist'))
app.use(express.static('public'))
