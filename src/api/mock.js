import Mock from 'mockjs'

// 使用 Mock
var data = Mock.mock('http://geek.itheima.net/v1_0/channels', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'channels|10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'name': '@ctitle(3, 5)'
    }
  ]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
