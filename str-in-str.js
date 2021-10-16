const str1 = 'abcdefghi';
const str2 = 'def';
const strinstr = (parent, child) => {
    for (let i = 0; i < parent.length; i++) {
        if (parent.substring(i, i + child.length) === child) {
            return i;
        }
    }
    return -1
}
console.log(strinstr(str1, str2))