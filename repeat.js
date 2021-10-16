const arr = [1, 3, 4, 2, 4, 3, 3, 2, 1, 6, 4]
const repeat = (arr) => {
    const obj=arr.reduce((previous, current) => {
        if (current in previous) {
            previous[current] += 1
        } else previous[current] = 1
        return previous;
    }, {})
    return obj
}
console.log(repeat(arr))