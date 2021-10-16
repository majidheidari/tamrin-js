const arr = [2, 3, 8, 23, 56, 176, 89, 12, -69, -45, -7]
const maxmin = (a) => {
    let i = 1;
    let max = -Infinity;
    let min = Infinity;

    while (i < a.length) {
        if (a[i] > max) max = a[i];
        if (a[i] < min) min = a[i];
        i++
    }
    return {max: max, min: min}
}
console.log(maxmin(arr))
