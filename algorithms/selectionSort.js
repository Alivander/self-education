// Сортировка выбором / Selection Sort

const selectionSort = arr => {

    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;

        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }

        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return arr;
};

console.log(
    'selectionSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])',
    selectionSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])
);
