// Сортировка перемешиваем (шейкерная, двунаправленная)

// Традиционный алгоритм на синтаксисе ES5

function swap(arr, i, j) {
    var swap = arr[i];

    arr[i] = arr[j];
    arr[j] = swap;
}

function cocktailSort(arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }

        right--;

        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            }
        }

        left++;
    }

    return arr;
}

// Оптимизируем - запоминаем место последней перестановки

function cocktailSortV2(arr) {
    var left = firstSwap = 0;
    var right = lastSwap = arr.length - 1;

    while (left < right) {

        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                lastSwap = i;
            }
        }

        right = lastSwap;

        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
                firstSwap = i;
            }
        }

        left = firstSwap;
    }

    return arr;
}

// переписываем на синтаксис ES6

const cocktailSortV3 = arr => {
    let left = firstSwap = 0;
    let right = lastSwap = arr.length - 1;

    while (left < right) {

        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                lastSwap = i;
            }
        }

        right = lastSwap;

        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
                firstSwap = i;
            }
        }

        left = firstSwap;
    }

    return arr;
};

// проверим результат

console.log(
    'cocktailSortV3([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])',
    cocktailSortV3([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])
);

// [ 1, 3, 4, 5, 8, 9, 12, 15, 52, 60, 63, 72 ]
