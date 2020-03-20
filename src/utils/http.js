import axios from 'axios'
import { baseURL } from '../../.env-default.js'

const defaultBaseUrl = 'http://localhost:8080/'

// 默认超时
axios.defaults.timeout = 15000

// 默认baseurl
axios.defaults.baseURL = baseURL || defaultBaseUrl

// 前端确定是同个cokiee 验证码这些
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 加默认参数
    config.headers = {}
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    // 这边处理http错误，抛到业务代码
    return response
  },
  (error) => {
    const data = error.response.data
    return Promise.reject(data || error)
  }
)
export default axios

/**
 * fetch 请求方法
 * @param {*} url
 * @param {*} params
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * post 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} data
 */
export function post(
  url,
  data = {},
  config = {
    transformRequest: [
      function(fData, headers) {
        headers['Content-Type'] = 'application/json'
        return JSON.stringify(fData)
      }
    ]
  }
) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

/**
 * patch 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} data
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data, {
        transformRequest: [
          function(fData, headers) {
            headers['Content-Type'] = 'application/json'
            return JSON.stringify(fData)
          }
        ]
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        }
      )
  })
}

export function del(url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { data }).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

// 上传图片
export function postImage(url, data) {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    formData.append('file', data)
    axios.post(url, formData, config).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
