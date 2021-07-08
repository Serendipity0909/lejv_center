import request from '@/api/myRequest'

function login(data) {
  return request({
    url: '/lejuAdmin/index/login',
    method: 'post',
    data
  })
}

function baseData() {
  return request({
    url: '/lejuAdmin/dashboard/baseData',
    method: 'get'
  })
}

export { login, baseData }
