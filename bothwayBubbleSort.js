// 鸡尾酒排序、双向冒泡排序
const {swap, data} = require('./swap')

console.time('耗时')
function sort(arr) {
  let tail = arr.length - 1

  for (let i = 0; i < tail; tail--) {
    // 第一轮，将最大的冒泡到后面
    for (let j = i; j < tail; j++) {
      arr[j] > arr[j + 1] && swap(j, j + 1, arr)
    }

    // 第二轮，将最小的冒泡到前面
    for (let j = tail; j > i; j--) {
      arr[j] < arr[j - 1] && swap(j, j - 1, arr)
    }

    i++
  }

  return arr
}

console.log(sort(data))
console.timeEnd('耗时')

