function selectionSort(array) {

    for (var i = 0; i < array.length; i++) {

        let min = i; //  storing the index of minimum element

        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j; // updating the index of minimum element
            }
        }

        if (i !== min) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array
}

console.log(selectionSort([4, 3, 5, 2])) 