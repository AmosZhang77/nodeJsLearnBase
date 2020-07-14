let fs = require('fs') // fileSystem 文件系统

fs.readFile('./2.es6.js', 'utf8', function (err, data) {
  if (err) return console.log(err)
  console.log(data)
})

// 手写util.promis方法
function read (url) { // url = ./2.es6.js
  return new Promise((resolve, reject)=>{
    fs.readFile(url, 'utf8', function (err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

let read = util.promisify(fs.readFile) // util.promisify 用法，效果同上。把一个函数promise化
read('./2.es6.js', 'utf8', function (err, data) {
  if (err) return console.log(err)
  console.log(data)
})

// promise 用法， promise的实例具备then方法、
