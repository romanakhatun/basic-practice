var marks = [12, 34, 23, 67, 10];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
	var element = marks[i];
	if (element > max) {
		max = element;
	}
}
console.log("It bigger is ", max);

//==========================//
var marks = [70, 30, 40, 98, 56, 23, 45];
var max = marks[0];

for (let i = 0; i < max.length; i++) {
    const element = max[i];
    if (element > max) {
        max = element
    }
}
console.log("hight value is", max);
