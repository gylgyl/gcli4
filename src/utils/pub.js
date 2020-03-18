import { USER_STORAGE, TOKEN_STORAGE } from './config'
// 获取token
export const getTokenPub = function() {
  let token = localStorage.getItem(USER_STORAGE)
  return token
}
// 设置token
export const setTokenPub = function(token) {
  localStorage.setItem(USER_STORAGE, token)
}

// 判断登录
export const checkLoginPub = function() {
  let token = localStorage.getItem(USER_STORAGE)
  if (token) {
    return true
  } else {
    return false
  }
}
// 退出登录
export const logoutPub = function() {
  localStorage.removeItem(USER_STORAGE)
  localStorage.removeItem(TOKEN_STORAGE)
}
