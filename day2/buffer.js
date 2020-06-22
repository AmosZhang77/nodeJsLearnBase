// 1. 通过长度创建
 buffer = Buffer.alloc(4) // <Buffer 00 00 00 00>  比较耗性能
console.log(buffer)

var buffer = Buffer.allocUnsafe(4) // <Buffer 00 00 00 11>  不清空原来内存中的东西，是什么内容不确定
console.log(buffer)

var buffer = Buffer.from([17, 18, 19, 0x11])
console.log(buffer) // <Buffer 11 12 13 11> 把10禁止转化成16进制，16进制不转化

var buffer = Buffer.from('张君歆') // 字符串转buffer
console.log(buffer) // <Buffer e5 bc a0 e5 90 9b e6 ad 86>
console.log(buffer.length) // 9
console.log(buffer.toString()) // 张君歆 buffer转字符串

// 1) fill方法
var buffer = Buffer.allocUnsafe(100)
buffer.fill(0) // 都用0填充
console.log(buffer) // 这个经和Buffer.alloc一样了

// 2) slice方法 （截取，浅拷贝slice(0)
// assign 浅拷贝
// var obj = {name:{name:'zjx'}}
// var newObj = Object.assign({}, obj)

// 深拷贝递归循环，parse
var obj = {name:{name:'zjx'}}
JSON.parse(JSON.stringify(obj)) // 深拷贝 缺陷不支持函数

// slice
var buffer = Buffer.from([1,2,3])
var newBuffer = buffer.slice(0,1) // 切割拷贝出来的是内存地址
newBuffer[0] = 100
console.log(buffer) // <Buffer 64 02 03> 100转成16进制是64，原数组被改变了，浅拷贝

// copy 拷贝
var buf1 = Buffer.from('一二')
var buf2 = Buffer.from('三四')
var buf = Buffer.allocUnsafe(12)
// 拷贝buffer(co
// targetBuffer 目标buffer， targetStart目标的开始项，sourceStart源的开始项，sourceEnd源的结束项 默认全部
buf1.copy(buf, 0)
buf2.copy(buf,6)
console.log(buf.toString()) // 一二三四

// concat 连接，效果同上
console.log(Buffer.concat([buf1, buf2]).toString())  // 一二三四 效果同上， 参二是产生bufferd的长度，不知道可以不写

// 判断是否是Buffer类型
if(Buffer.isBuffer(buf)){
  console.log('是buffer类型')
}
