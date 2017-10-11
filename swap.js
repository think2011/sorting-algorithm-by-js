// 辅助用
module.exports = {
    data: [1, 2, 5, 6, 9, 7, 10, 8, 4],

    swap(i, j, arr) {
        let tmp = arr[j]

        arr[j] = arr[i]
        arr[i] = tmp

        return arr
    }
}