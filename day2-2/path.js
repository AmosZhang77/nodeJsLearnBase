let path = require('path')

console.log(path.join('./a', './b')) // a\b
console.log(path.join('./a', './b', '..')) // a
console.log(path.join(__dirname, './a', './b')) // E:\jsnote\nodejs\node9th_1day\day3\a\b

// 当前项目绝对路径 __dirname

// 解析一个绝对路径出来
console.log(path.resolve('/a','./b')) // E:\a\b
console.log(path.resolve('./a','./b')) // E:\jsnote\nodejs\node9th_1day\day3\a\b  效果同第五行，稍加一个__dirname

console.log(path.delimiter) // 分割环境变量 windows
console.log(path.posix.delimiter) // 分割环境变量 linux

// 流是基于事件的

