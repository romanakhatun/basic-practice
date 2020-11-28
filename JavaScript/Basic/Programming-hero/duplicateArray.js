var number = [2, 34, 2, 34, 56, 678,455,2];
var uniqNumber = [];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    var index = uniqNumber.indexOf(element);
    if (index == -1) {
        uniqNumber.push(element);
    }
}
console.log(uniqNumber)