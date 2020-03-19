const Mock = require('mockjs')
import { baseURL } from '../../.env-default.js'

// 登录
Mock.mock(baseURL + '/user/login', 'post', (config) => {
  let data = {
    user: {
      name: 'gyl',
      age: 23,
      sex: 1
    },
    token: 'asdaadddddd'
  }
  return data
})

// 获取用户
Mock.mock(baseURL + '/api/user/info', 'post', (config) => {
  let data = {
    user: {
      name: 'gylget',
      age: 33,
      sex: 0
    },
    token: 'asdaadddddd'
  }
  return data
})
