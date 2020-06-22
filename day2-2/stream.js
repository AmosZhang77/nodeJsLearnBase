// 流 可读流和可写流
// 流： 边读边写 不是疯狂地读
let fs = require('fs')
// highWaterMark 每次读多少，默认54k，默认不需要改
// 默认buffer格式
let rs = fs.createReadStream('t1.txt', { highWaterMark: 1 })
// 需要监听事件 数据来到的事件 re.emit('data', 数据)
// 默认叫非流动模式， 流动模式
console.log(rs)

// 默认data事件是不停地出发，直到文件中的数据全部读出来
rs.on('data', function (chunk) {
  console.log(chunk)
  // 未限定highWaterMark  <Buffer 31 32 33 34 35 36 37 38 39 0d 0a>
  // 限定highWaterMark 到1字节
  // <Buffer 31>
  // <Buffer 32>
  // <Buffer 33>
  // <Buffer 34>
  // <Buffer 35>
  // <Buffer 36>
  // <Buffer 37>
  // <Buffer 38>
  // <Buffer 39>
  // <Buffer 0d>
  // <Buffer 0a>
})

/* rs.on('data', function (chunk) {
  str += chunk
  console.log(chunk) // 这里如果所有内容没被截断，可以打印出正确结果，但是内容不确定，所以不能这样

}) */


let arr = []
 rs.on('data', function (chunk) {
   arr.push(chunk)
})

rs.on('end', function () {
 console.log(Buffer.concat(arr).toString())
})


let rs2 = fs.createReadStream('t1.txt', { highWaterMark: 1 })

let arr2 = []
rs2.on('data', function (chunk) {
  arr2.push(chunk)
  console.log(chunk)
  rs2.pause() // 暂停读取
  setTimeout(function () {
    rs2.resume() // 恢复读取
  }, 1000)
})

rs2.on('end', function () {
  // console.log(Buffer.concat(arr2).toString())
  console.log(Buffer.concat(arr2).toString())
})

rs2.on('err', function (err) {

})
