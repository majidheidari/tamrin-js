const str = 'asdfghjkl'
const reverse = (str) => {
    if (str.length>0) {
        return reverse(str.slice(1))+str[0];
    }else return ''
}
console.log(reverse(str))