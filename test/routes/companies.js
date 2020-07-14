// import { getListByTenantId } from 'api/manage'
let manage = require('../api/manage') // nodejs 暂时不支持es6模块
// const manage = import("api/manage")
console.log('manage', manage)
let express = require('express')
let router = express.Router() // 创建一个路由池子
// router和app一样，也是函数

router.get('/getListByTenantId', async function (req, res) {
/*  try {
    // console.log(req)
    console.log(req.query)
    console.log(req.url)
    console.log(req.path)
    // console.log(req.URL.pathname)
    console.log(req.method)
    console.log(req.headers['x-token'])

    const params = {
      index: req.query.index,
      size: req.query.size,
      tenantId: req.query.tenantId,
      keyword: req.query.keyword
    }

    const res2 = await manage.getListByTenantId(params, req.headers['x-token'], req.method)
    console.log('res2', res2)
    res2.result.records = res2.result.records.slice(0,4)
    res.send(res2)
  } catch (e) {
    return e;
  }*/


  console.log(req.query)
  console.log(req.url)
  console.log(req.path)
  // console.log(req.URL.pathname)
  console.log(req.method)
  console.log(req.headers['x-token'])

  const params = {
    index: req.query.index,
    size: req.query.size,
    tenantId: req.query.tenantId,
    keyword: req.query.keyword
  }

  const res2 = await manage.getListByTenantId(params, req.headers['x-token'], req.method)
  console.log('res2', res2)
  res2.result.records = res2.result.records.slice(0,4)
  res.send(res2)
})


module.exports = router
