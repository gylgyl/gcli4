const Mock = require('mockjs')
import { baseURL } from '../../.env-default.js'

// 登录
Mock.mock(baseURL + '/user/login', 'post', (config) => {
  let data = {
    user: {
      name: 'gyl',
      age: 23
    },
    token: 'asdaadddddd'
  }
  return data
})

// 获取用户
Mock.mock(baseURL + '/api/user/info', 'fetch', (config) => {
  let data = {
    user: {
      name: 'gylget',
      age: 33
    },
    token: 'asdaadddddd'
  }
  return data
})
