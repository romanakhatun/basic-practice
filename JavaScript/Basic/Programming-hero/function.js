function name() {
    console.log("Hi! Wasima");
}
name();
// ===================================== //

function doubleValue(number) {
    var result = number/2;
    return result; 
};
var first = doubleValue(22);
var second = doubleValue(44);
var total = first + second;
console.log(first, second, total);
// ===================================== //

function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
console.log(add(20,40));