// 递归创建目录
fs = require('fs')
function makep (url, cb) {
  // a, a/b, a/b/c, a/b/c/d  [a,b,c,d]
  let urlArr = url.split('/')
  let index = 0
  function make (p) {
    if (urlArr.length < index) return
    // 在创建前看是否存在，不存在创建，存在继续下次创建
    fs.stat(p, function (err) {
      if (err) { // 不存在创建
        fs.mkdir(p, function (err) {
          if (err) return console.log(err)
          make(urlArr.slice(0, ++index + 1).join('/')) // index++  路径加一层
        })
      } else {
        make(urlArr.slice(0, ++index + 1).join('/'))
      }
    })
  }
  make(urlArr[index])
}

makep('a/b/c/d ', function (err) {
  console.log('创建成功')
})
