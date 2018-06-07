// Сортировка вставкой / Insertion Sort

// классический вариант, ES5

function insertionSort(arr) {

    for (let i = 1, l = arr.length; i < l; i++) {
        var current = arr[i];
        var j = i;

        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
};

// без дополнительной переменной, ES6

const insertionSortV2 = arr => {

    for (let i = 1, l = arr.length; i < l; i++) {

        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }

    }

    return arr;
};

console.log(
    'insertionSortV2([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])',
    insertionSortV2([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])
);
