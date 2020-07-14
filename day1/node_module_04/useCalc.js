/**
 这里调用求和方法
 */

let calc = require('./calc')
console.log(calc(1, 2, 3, 4, 5))


calc = require('./calc')
calc = require('./calc')
calc = require('./calc') // html里面加多个一样的js会执行多遍，这里只会执行一次，require会检查缓存，有过了就不在引入了。

// require具有缓存功能，多次引入只执行一次，存到require对象的cash里
console.log(require)
