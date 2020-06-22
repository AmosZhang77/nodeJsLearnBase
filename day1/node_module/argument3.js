console.log(arguments) // 打印结果如下

/** 是5个参数 export  require module __filename __dirname
// export 默认 空对象 {}
// require 需求函数
// module 当前模块
// __filename 当前文件名
// __dirname 当前目录名
 */


// [Arguments] {
//   '0': {},
//   '1':
//    { [Function: require]
//      resolve: { [Function: resolve] paths: [Function: paths] },
//      main:
//       Module {
//         id: '.',
//         exports: {},
//         parent: null,
//         filename: 'E:\\jsnote\\nodejs\\node9th_1day\\argument3.js',
//         loaded: false,
//         children: [],
//         paths: [Array] },
//      extensions:
//       [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
//      cache:
//       [Object: null prototype] { 'E:\\jsnote\\nodejs\\node9th_1day\\argument3.js': [Module] } },
//   '2':
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: 'E:\\jsnote\\nodejs\\node9th_1day\\argument3.js',
//      loaded: false,
//      children: [],
//      paths:
//       [ 'E:\\jsnote\\nodejs\\node9th_1day\\node_modules',
//         'E:\\jsnote\\nodejs\\node_modules',
//         'E:\\jsnote\\node_modules',
//         'E:\\node_modules' ] },
//   '3': 'E:\\jsnote\\nodejs\\node9th_1day\\argument3.js',
//   '4': 'E:\\jsnote\\nodejs\\node9th_1day' }



/** 模块化好处 低耦合 高内聚 方便维护 防止代码和命名冲突
  node基于commonjs 文件读写,天生自带模块化
 1. 创建模块 一个js文件就是一个模块
 2. 使用模块 require
 3. 导出模块 exports / module.exports
 */
