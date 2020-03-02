import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/design/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/design/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/design/logout',
    method: 'post'
  })
}
