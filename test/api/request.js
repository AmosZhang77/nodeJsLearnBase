// import axios from 'axios'
let axios = require('axios')

// create an axios instance

let baseUrl = 'http://30.1.1.124:6005/' + 'beijingtyqyt/api'

const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const url = config.url
    if (config.method === 'get') {
      url.indexOf('?') === -1 ? config.url = url + '?timestamp=' + (new Date().getTime()) : config.url = url + '&timestamp=' + (new Date().getTime())
    }
/*    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }*/
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
console.log(res)
    // if the custom code is not 20000, it is judged as an error.
/*    if (res.code !== 0) {
      // if (res.code !== 20000) {
      Message.closeAll()
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.code === 4010213 || res.code === 4001001) {
        // to re-login
        Message.closeAll()
        Message({
          message: '您的登陆信息已失效，请重新登录',
          type: 'error',
          duration: 3 * 1000
        })
        setTimeout(() => {
          store.dispatch('user/resetToken').then(() => {
            let loginRoute = '/login?'
            switch (getUserType()) {
              case 'company':
                loginRoute = '/company/login?companyNo=person'
                break
              case 'person':
                loginRoute = '/person/login?companyId=' + (getCompanyId() || 0)
                break
              default:
                loginRoute = '/login?'
                break
            }

            loginRoute += '&tenantNo=' + (getRootTenantNo() || vueT.$route.query.tenantNo || 'undefinedTenant')
            vueT.$router.push(`${loginRoute}&redirect=${vueT.$route.fullPath}`)
            // location.reload()
            // vueT.$router.push('/login')
          })
        }, 2000)
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }*/
    return res
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

module.exports = service
