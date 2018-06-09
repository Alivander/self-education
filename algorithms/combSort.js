// Сортировка расческой / Comb sort

const combSort = arr => {
    const l = arr.length;
    const factor = 1.247;
    let gapFactor = l / factor;

    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);

        for (let i = 0, j = gap; j < l; i++, j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        gapFactor = gapFactor / factor;
    }

    return arr;
};

console.log(
    'combSort([5, 1, 8, 9, 4, 6, 2, 3, 7, 0]',
    combSort([5, 1, 8, 9, 4, 6, 2, 3, 7, 0])
);
