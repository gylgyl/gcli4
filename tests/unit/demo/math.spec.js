import { add, min } from './math'
describe('测试math方法', () => {
  it('加法', () => {
    expect(add(1, 3)).toBe(4)
  })
  it('减法', () => {
    expect(min(4, 1)).toBe(3)
  })
  const arr = [
    { name: 'hu', data: 1 },
    { name: 'hu', data: 2 },
    { name: 'hu', data: 3 },
    { name: 'hu45', data: 7 },
    { name: 'hu45', data: 9 }
  ]
  function deal(arr) {
    let nameAr = []
    let resObj = []
    arr.forEach((item) => {
      if (!nameAr.includes(item.name)) {
        nameAr.push(item.name)
        let itemObj = {
          name: item.name,
          data: [item.data]
        }
        resObj.push(itemObj)
      } else {
        let index = nameAr.indexOf(item.name)
        resObj[index].data.push(item.data)
      }
    })
    return resObj
  }
  const lastA = [
    {
      data: [1, 2, 3],
      name: 'hu'
    },
    {
      data: [7, 9],
      name: 'hu45'
    }
  ]
  it('dd', () => {
    expect(deal(arr)).toEqual(lastA)
  })
})
