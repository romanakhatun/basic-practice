function quickSort(list) {
    if (list.length <= 1) {
        return list
    } else {
        const left = []
        const right = []
        const sorted = []
        const pivot = list.pop()
        const length = list.length

        for (let i = 0; i < length; i++) {
            if (list[i] <= pivot) {
                left.push(list[i])
            } else {
                right.push(list[i])
            }
        }

        return sorted.concat(quickSort(left), pivot, quickSort(right))
    }
}

const list = [42, 223, 345, 144, 534, 123, 234]

const sorted = quickSort(list)

console.log(sorted)