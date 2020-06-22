class Dialog {
  constructor () {
    this.time = 3000 // 构造函数中的私有属性
  }
  static title () { // 静态属性
    return '弹框'
  }
  // 相当于es5模块中的prototype上加方法 Dialog.prototype.$show = function () {
  //   console.log('show')
  // }
  $show () {
    console.log('show')
  }
  $hide () {
    console.log('hide')
  }
}
module.exports = Dialog
