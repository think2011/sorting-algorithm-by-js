// 冒泡排序
const {swap, data} = require('./swap')

console.time('耗时')
function sort(arr) {
  let len    = arr.length
  let isSwap = null

  for (let i = 0; i < len; i++) {
    isSwap = false

    for (let j = 0; j < len - 1 - i; j++) {
      arr[j] > arr[j + 1] && (isSwap = true) && swap(j, j + 1, arr)
    }

    if (!isSwap) break
  }

  return arr
}

console.log(sort(data))
console.timeEnd('耗时')

