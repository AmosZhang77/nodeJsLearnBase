/**
 写一个求和的方法
 */

// 不用箭头函数的写法。
// function sun (...args) {
//   return args.reduce((prev, next)=>{
//     return prev + next
//   })
// }

let sum = (...args) => args.reduce((prev, next) => prev + next)

module.exports = sum
