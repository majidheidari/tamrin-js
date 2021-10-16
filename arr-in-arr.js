const arr1 = [2, 5, 7, 2, 5, 7, 0, 2, 3, 1, 3]
const arr2 = [2, 4, 7, 9, 0]
const arrinarr = (parent, child) => {
    let result = [];
    for (let i of parent) {
        if (!child.includes(i)) {
            result.push(i)
        }
    }
    return result
}
console.log(arrinarr(arr1, arr2))