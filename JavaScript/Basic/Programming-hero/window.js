var name = "romana";
function add(num1, num2) {
    var result = num1 + num2;
    console.log('inside name', name)
    return result;
}
console.log('outside name', name);
var sum = add(20, 30);
console.log(sum);
