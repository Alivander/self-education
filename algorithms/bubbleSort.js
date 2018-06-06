// Сортировка пузырьком

// Простой дубовый алгоритм

function bubbleSort(arr) {

    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    return arr;
}

// Оптимизируем алгоритм для уже отсортированного массива

function bubbleSortV2(arr) {

    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;

        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return arr;
}

// Перепишем алгоритм на ES6

const bubbleSortV3 = arr => {

    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;

        for (let j = 0, endJ = endI - i; j < endJ; j++) {

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return arr;
};

// проверим результат

console.log(
    'bubbleSortV3([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])',
    bubbleSortV3([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])
);

// [ 1, 3, 4, 5, 8, 9, 12, 15, 52, 60, 63, 72 ]
