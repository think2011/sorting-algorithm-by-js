// todo 归并排序
const {swap, data} = require('./swap')

console.time('耗时')
function sort(arr) {
  let len = arr.length

  if (len < 2) return arr

  let m = len >> 1
  let left = arr.slice(0,m)
  let right = arr.slice(m) // 拆分为两个子数组



  return arr
}

console.log(sort(data))
console.timeEnd('耗时')

