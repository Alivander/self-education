// Гномья сортировка / Gnome sort

const gnomeSort = arr => {
    const l = arr.length;
    let i = 1;

    while (i < l) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        } else {
            i++;
        }
    }

    return arr;
};

// проверим результат

console.log(
    'gnomeSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])',
    gnomeSort([5, 8, 52, 15, 1, 3, 4, 9, 60, 63, 72, 12])
);
