const api = {
  development: 'http://xxxx:8080',
  mock: 'http://xxxx',
  feature: 'http://xxxx',
  test: 'http://xxxx',
  production: 'http://xxxx'
}

// export const baseURL = api[process.env.NODE_ENV || 'production']

module.exports = {
  baseURL: api[process.env.NODE_ENV || 'dev']
}
