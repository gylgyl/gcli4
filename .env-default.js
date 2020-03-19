const api = {
  // development: 'http://localhost:8080',
  development: 'http://apiMock.com',
  mock: 'http://apiMock.com',
  feature: 'http://xxxx',
  test: 'http://apiMock.com',
  production: 'http://xxxx'
}

// export const baseURL = api[process.env.NODE_ENV || 'production']

module.exports = {
  baseURL: api[process.env.NODE_ENV || 'dev']
}
