var numbers = [34, 56, 678, 905, 7655];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	var total = numbers[i];
	sum = total + sum;
}
console.log("Total of numbers is", sum);

//=================================//
function getArrayNum() {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		var total = numbers[i];
		sum = total + sum;
	}
}
var numbers = [56, 78, 90, 88, 9];
var result = getArrayNum(numbers);
console.log("Total of numbers is", result);


//=================================//
// var numbers = [12, 34, 45, 67, 76];
// var sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     sum = sum + element; 
// }
// console.log("total value is", sum);

//===================================//

var numbers = [12, 34, 45, 67, 76];
function getSumArray(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element; 
    }
    return sum;
}
var result = getSumArray(numbers)
console.log("total value is", result);

