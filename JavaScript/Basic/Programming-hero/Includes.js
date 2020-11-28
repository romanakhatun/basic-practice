const str = 'To be,or not to be, that is the question. 1'

console.log(str.includes('To be'))
console.log(str.includes('or not', '1'))//true
console.log(str.includes('To be', '1')) // false
console.log(str.includes('')) //true