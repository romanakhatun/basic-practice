function BinarySearch(array, low, high, target) {

    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (target == array[mid]) {
        console.log('Target is found at index: ', mid)
        return mid;
    }
    else if (target < array[mid]) {
        return BinarySearch(array, low, mid - 1, target);
    }
    else {
        return BinarySearch(array, mid + 1, high, target);
    }
}
BinarySearch([1, 5, 7, 8, 9, 10, 15], 0, 6, 5)