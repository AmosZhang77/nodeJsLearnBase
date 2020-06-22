// 发布订阅
let EventEmitters = require('events')
let {inherits} = require('util')
function Girl () {

}
let girl = new Girl()
inherits(Girl, EventEmitters) // 让Girl继承EventEmitters发布订阅功能，EventEmitters上.protoType上的方法
girl.on('失恋', function (param) { // 事件订阅
  console.log('哭', param)
})
x
girl.on('失恋', function (param) { // 事件订阅 可以同意事件绑多个函数
  console.log('吃', param)
})
let fn = function(param){
  console.log('哭', param)
}
girl.on('失恋', fn)
girl.once('失恋', function (param) { // 只触发一次
  console.log('分手', param)
})
girl.emit('失恋', '参数') // 事件发布

girl.removeAllListener('失恋') // 移除全部函数
girl.removeListener('失恋', fn) // 移除单个函数
