// fileSystem 文件系统 文件的读写
let path = require('path')
let fs = require('fs')
// 同步或异步操作

// 同步读取
// 1.读取文件 文件必须存在。// 2.读取的默认类型是buffer
fs.readFileSync('./fs.js') // 3中等效写法。1. './fs.js' 2.'../fs.js'  3.'fs.js'也是相对路径表示当前路径
// 而 /fs.js表示c更目录下面，比如c盘。
fs.readFileSync('./fs.js', 'utf8') // 不用默认buffer，读出来转化成字符串

let content1 = fs.readFileSync('./t1.txt', 'utf8')
// let content2 = fs.readFileSync('./t2.txt', 'utf8')
// console.log('content1', content1.toString())

// let content2 = fs.readFileSync(path.resolve(__dirname,content1), 'utf8')
// console.log('content2', content2)

/*fs.readFile('./1.txt', 'utf8', function (err, data) {
  console.log('tet1', data)
  if (err) return console.log(err)
  fs.readFile(data, 'utf8', function (err, data) {
    if (err) return console.log(err)

    console.log('text2', data)
  })
})*/

// 自己封装promisify
/*function read(url){
  return new Promise((resolve, reject)=>{
    fs.readFile(url,'utf8',function (err, data) {
      if(err) return reject(err)
      resolve(data)

    })
  })
}*/

let util = require('util')

// 效果如上
let read = util.promisify(fs.readFile)

/*read('./t1.txt').then(function (data) {
  read(data, 'utf8').then(function () {

  })
  console.log(data)
}, function (err) {
  console.log(err)
}).catch(() => {
  // 处理错误，如果写了错误callback走自己的，没写可以统一在这里处理
})*/

//链式写法 如果第一个promise返回一个promise实例，会把当前执行的结果传到下一个then里面

/*read('./t1.txt', 'utf8').then(function (data) {
  console.log('11', data)
  // return read(data, 'utf8') // 报错，这里会报找不到文件，但是拿地址到浏览器能找到电脑上的文件。我把这个打印出来的，复制了下，发现斜杠反的
  // return read(path.resolve(__dirname, data), 'utf8') // 报错，这里会报找不到文件，但是拿地址到浏览器能找到电脑上的文件。我把这个打印出来的，复制了下，发现斜杠反的

  return read(data.trim(), 'utf8') // 报错，因为编辑器在文档后面加了回车等，使路径不对了，加了trim()就好了。
//content1.trim()
  // return read('E:/jsnote/nodejs/node9th_1day/day2/t2.js', 'utf8') // 这里能读出来2.txt， 这里的地址是我把上面报错的地址斜杠反一下。
  return read('./t2.js', 'utf8') // 这里能读出来2.txt
}).then(function (data) {
  console.log('22', data)

  return (data + '11')
}).catch((err) => {
  console.log('err', err)
  // 处理错误，如果写了错误callback走自己的，没写可以统一在这里处理
})*/

// await 后面只能跟promise
async function result () {
  let content1 = await read('./t1.txt', 'utf8')
  let content2 = await read(content1.trim(), 'utf8')
  let str = content2 + '1'
  console.log('eee', str)
}
result()

Promise.all([read('t1.txt', 'utf8'), read('t2.txt', 'utf8')]).then(function (data) {
  console.log(data) // data是数组，前面请求的结果按顺序排。只要有一个错误就不走，走catch
}).catch(err => {})

// async 写Promise.all
async function result2 () {
  let [r1, r2] = await Promise.all([read('t1.txt', 'utf8'), read('t2.txt', 'utf8')])
  console.log(r1, r2, 'Promise.all')

}
result2()
// Promise.rice([read('1.txt', 'utf8'), read('2.txt', 'utf8')]).then(data=>{},err=>{}) // 先失败算失败，先成功算成功，已快的为准

// readFile 是读到内存里面，文件太大，系统会没内存用。
// 读都出来的类型默认buffer。 写入的时候utf8
// 读取的文件必须存在，写入的文件不存在会自动创建，如果里面已经有内容会被覆盖
fs.writeFile('w1.txt', '{name:1,age:2}', function (err) {
  console.log(err)
})
/*fs.writeFileSync({

})*/

// sf.stat()
fs.stat('/',function (err,stats) {
  console.log(err, stats)
  //   atime: 2020-05-14T02:34:34.660Z,  访问时间
  //   mtime: 2020-05-14T02:34:34.660Z,  修改时间
  // ctime: 2020-05-14T02:34:34.660Z, change时间
  // birthtime: 2019-02-21T07:24:11.156Z  创建时间

  console.log(stats.isFile()) // 是否是文件
  console.log(stats.isDirectory()) // 是否是目录
})

fs.mkdir('a',function (err) {
  console.log(err) // 当期目录添加名为a的目录，每次只能建一个，不能同时建一个再建一个字目录 a/b，如a不存在会报错，存在能正常建。
}) // 创建目录
