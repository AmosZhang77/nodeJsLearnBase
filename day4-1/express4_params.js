let express = require('express')
let app = express()

app.listen(8070)

// /user?id=1 查一个 /user 查所有

// /user/1 表示查一个， /usr 查所有 这样把两个逻辑分开写，如下。用路径参数传参，不用问号

app.get('/user', function (req, res) {
  res.end('select all')

})

// :id 是占位符，值可以随意
// /user/1/2  变成{id;1, name:2}  req.params就可拿到
app.get('/user/:id', function (req, res) {
  res.end('select one' + req.params.id)
})

// 参数可以是多个,请求如果参数是下面两个，就会走这里，永远不会匹配上面缺参数的
app.get('/user/:id/:name', function (req, res) {
  res.end('select one' + req.params.id + req.params.name)
})


// 以下内容是路径参数的一种实现（和使用express无关）
let url = '/user/3/5/a'
let url2 = '/user/:id/:name/a'

// 姜url2 转化成一个可以匹配url的正则
let arr = []
let newReg = url2.replace(/:[^\/]+/g, function () { // 匹配：开头，非/ 结果是
  arr.push(arguments[0].slice(1)) // arguments[0]是每次匹配到的结果，然后slice去掉冒号。arr结果 [id, name]
  return '([^\/]+)' // 用来把url 里的参数用子捕获组抓出来。这里制作这样的正则已达到目的
})
let reg = new RegExp(newReg)
let newArr = reg.exec(url) // 第二个参数后面都是子捕获组，后面还有别的，所以拿arr来foreach拼出最后结果
let result = {}
arr.forEach(function (item,index) {
  result[item] = newArr[index + 1]

})
console.log(result) // {id;1, name:2}
