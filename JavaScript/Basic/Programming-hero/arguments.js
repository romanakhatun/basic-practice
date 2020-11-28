// function numbers(num1, num2) {
//     console.log(arguments)
//     return num1 + num2;
// }
// const result = numbers(3, 9, 34, 5);
// console.log(result)
////
function numbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num

    }
    return sum
}
const result = numbers(3, 9, 34, 5);
console.log(arguments)