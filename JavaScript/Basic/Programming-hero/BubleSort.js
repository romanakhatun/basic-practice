function swap(array, first_Index, second_Index) {
    var temp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;
}

function bubble_Sort(array) {

    var len = array.length,
        i, l, stop;

    for (i = 0; i < len; i++) {
        for (l = 0, stop = len - i; l < stop; l++) {
            if (array[l] > array[l + 1]) {
                swap(array, l, l + 1);
            }
        }
    }

    return array;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));