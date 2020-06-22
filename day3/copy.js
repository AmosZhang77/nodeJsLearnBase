// 为了方便实例，将参数设的很小，实际不应该设那么小。
// 30b 读取4b 5次 写1b,暂停读取，当drain恢复读取
let fs = require('fs')

function pipe (source, target) {
  let rs = fs.createReadStream(source, { highWaterMark: 8})
  let ws = fs.createWriteStream(target, { highWaterMark: 20})


  rs.pipe(ws) // 会自动处理读写流，自动调用以下方法,大文件都是用这个流方法读的

  // 以下是自己手写的 pipe
  // 开启可读流
 /* rs.on('data', function (chunk) { // 读完highWaterMark个字节执行本函数
    console.log('data=',chunk)
    if (ws.write(chunk) === false) { // 如果读的highWaterMark比写的highWaterMark大会触发，ws.write(chunk) === false。写的比读的大很多永远不触发
      // 感觉是表示来不及写了就触发

      console.log('ws.write(chunk) === false', 'chunk', chunk)
      rs.pause() // 暂停读取
    }
  })
  ws.on('drain',function () {
    rs.resume() // 当前读入的内容都写到了文件中  调用继续读取
  })
  rs.on('end',function () { // 读取完毕，将未写完的文件写完，关闭文件
    ws.end()
  })*/
}

// pipe('t1.txt', 't2.txt')
