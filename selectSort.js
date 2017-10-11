// 选择排序
const {swap, data, timeEnd} = require('./swap')

console.time('耗时')
function sort(arr) {
  let len = arr.length
  let min = null

  for (let i = 0; i < len - 1; i++) {
    min = i

    for (let j = i + 1; j < len; j++) {
      // 记住最小数的下标
      arr[j] < arr[min] && (min = j)
    }

    min !== i && swap(i, min, arr)
  }

  return arr
}

console.log(sort(data))
console.timeEnd('耗时')