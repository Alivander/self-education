// Сортировка Шелла / Shell sort

const ShellSort = arr => {
    const l = arr.length;
    let gap = Math.floor(l / 2);

    while (gap >= 1) {

        for (let i = gap; i < l; i++) {
            const current = arr[i];
            let j = i;

            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = current;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
};

console.log(
    'ShellSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])',
    ShellSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72])
);
