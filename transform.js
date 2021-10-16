const arr = [1, 6, 7, 3, 4, 6, 5, 2];
const index = 1;
const offset = -1;
const transform = (arr, index, offset) => {
    let result = []
    if (index + offset < arr.length && index + offset >= 0) {
        let item=arr.splice(index,1)[0]
        for (let i = 0; i < index + offset; i++) {
            result.push(arr[i])
        }
        result.push(item)
        for (let i = index + offset+1; i <= arr.length; i++) {
            result.push(arr[i-1])
        }
    }else return 'no match'
    return result
}
console.log(transform(arr,index, offset))