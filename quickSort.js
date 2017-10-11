// 快速排序
const {swap, data} = require('./swap')

console.time('耗时')

function sort(arr) {
    if (arr.length <= 1) return arr

    let pivotIndex = arr.length - 1 // 以最后一个作为基准元素
    let pivot      = arr.splice(pivotIndex, 1)[0]
    let left       = []
    let right      = []

    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }

    return sort(left).concat(pivot, sort(right))
}

console.log(sort(data))
console.timeEnd('耗时')