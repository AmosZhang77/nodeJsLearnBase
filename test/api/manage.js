// import request from 'api/request'
let request = require('../api/request')

const getListByTenantId = (data,token,method) => {
  return request({
    url: '/companies/getListByTenantId',
    method: method,
    params: data,
    headers: {'x-token': token}
  })
/*  return function () {

  }*/
}

module.exports = {getListByTenantId:getListByTenantId}
