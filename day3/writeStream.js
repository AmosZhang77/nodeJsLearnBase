// 流 可写流
let fs = require('fs')
// highWaterMark 每次写多少，默认16k，默认不需要改
// 默认buffer格式
let ws = fs.createWriteStream('./t1.txt', { highWaterMark: 1 })
// 可写流有两个方法 write end
// 默认叫非流动模式， 流动模式
// ws.write(1) // 参数必须未字符串或者buffer,这里回报错
// ws.write(1.toString()) // 参数必须未字符串或者buffer
ws.write(1 + '') // 参数必须未字符串或者buffer
var flag = ws.write(1 + '') // write 是异步的返回一个布尔，当前highWaterMark是否满了，虽然不会丢，可以让读暂停，节约内存。
console.log(flag)
ws.write(1 + '') // 多次是累加，不是覆盖
ws.end('我再说最后一句') // end之后不能写了。调用后会把所有write中的内容以最快的速度写入文件
ws.on('drain',function () { // 当读入设定内存的文件写入完成后发生事件，可以用于恢复读取
  console.log('当读入设定内存的文件写入完成后')
})

// 300k 读取64k 5次 读取一次就开始写，只能写16k,暂停读取，当drain恢复读取


