const number = 376934;
const printNumber = (num) => {
    const str = num.toString();
    let string = '';
    for (let i = 0; i < num.toString().length; i++) {
        string += str[i] + ':' + str[i].repeat(parseInt(str[i])) + '\n'
    }
    return string
}
console.log(printNumber(number))