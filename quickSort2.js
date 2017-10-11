// 快速排序2
const {swap, data} = require('./swap')

console.time('耗时')

function sort(arr) {
    _sort(arr, 0, arr.length - 1)
    return arr
}

function _sort(arr, left, right) {
    if (left > right) return

    let storeIndex = partition(arr, left, right)
    _sort(arr, left, storeIndex - 1)
    _sort(arr, storeIndex + 1, right)
}

function partition(arr, left, right) {
    let storeIndex = left
    let pivot      = arr[right] //直接选最右边的元素作为基准

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            swap(i, storeIndex, arr)
            storeIndex++  // 交换位置后自增1，代表下一个可能交换的位置
        }
    }
    swap(right, storeIndex, arr) // 将基准元素放到最后正确的位置上

    return storeIndex
}

console.log(sort(data, 0, data.length - 1))
console.timeEnd('耗时')