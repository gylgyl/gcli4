import { login } from '@/api/index'
describe('login api', () => {
  const response = {
    user: {
      name: 'gyl',
      age: 23,
      sex: 1
    },
    token: 'asdaadddddd'
  }
  // const errorResponse = {
  //   code: '5000',
  //   data: {},
  //   message: '用户名或密码错误'
  // }
  it('测试正常登陆', async () => {
    const params = {
      user: 'admin',
      password: '123456'
    }
    expect(await login(params)).toEqual(response)
  })
  // it('测试异常登陆', async () => {
  //   const params = {
  //     user: 'admin',
  //     password: '123123'
  //   }
  //   expect(await login(params)).toEqual(errorResponse)
  // })
})
