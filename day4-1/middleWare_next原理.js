// next 方法原理
function app () {}
// 每次调用use方法都会将方法存到数组中，默认调用数组的第一项，将next方法传递给数组中的函数

app.middlereware = [] // 存use调锅的中间件
app.use = function (cb) { // 入参是操作函数
  this.middlereware.push(cb) // use内的中间件函数存起来 [fn, fn, fn]
}
app.use(function () {
  console.log(1)
  next()
})
app.use(function () {
  console.log(2)
  next()
})
app.use(function () {
  console.log(3)
  next()
})
app.use(function () {
  console.log(4)
  next()
})

let index = 0
function next(){
  if(index <app.middlereware.length){ // 执行完了结束
    app.middlereware[index++](null,null,next) // 把next回调传给每一个use里，
    // 这里++ 语句一定要写上面，要不然死循环index++
  }
}

next()
