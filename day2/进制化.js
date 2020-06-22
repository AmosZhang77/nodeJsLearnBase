// base64 进制转化 汉字转换原理
// 把一个汉字24位转化成4个字节，每个字节只有6位了,用0在前面补齐8位
let buf = Buffer.from('张')
console.log(buf.toString('base64')) // 转base
console.log(buf) // <Buffer e5 bc a0>
// 1.把16进制转化成2进制，用toString()
console.log((0xe5).toString(2))
console.log((0xbc).toString(2))
console.log((0xa0).toString(2))
// 11100101 10111100 10100000
// 00+111001  00+01 1011  00+1100 10   00+100000 // 最多6位有值，所以base64最大63
// 2.将这些值转化成10进制，用parseInt。去可见编码中取值
console.log(parseInt('00111001', 2))
console.log(parseInt('00011011', 2))
console.log(parseInt('00110010', 2))
console.log(parseInt('00100000', 2))
// 57 27 50 32
// 按照以下的64位的base64编码表str对应转换
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
str += 'abcdefghijklmnopqrstuvwxyz'
str += '0123456789'
str += '+/'
console.log(str[57] + str[27] + str[50] + str[32]) // 5byg 这就是转换出来的base64编码
