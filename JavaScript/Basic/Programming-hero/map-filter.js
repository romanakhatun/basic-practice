const ExamNumbers = [25, 46, 67, 86, 56];
const output = [];
for (var i = 0; i < ExamNumbers.length; i++) {
	const element = ExamNumbers[i];
	const result = element + element;
	output.push(result);
}
console.log(output);
////
const students = [
	{ result: 456, name: "Rina" },
	{ result: 670, name: "bina" },
	{ result: 780, name: "sina" }
];
const names = students.map(n => n.name);
console.log(names);

if ("false") {
	console.log("I am not false");
} else {
	console.log("I am false");
}

if ({}) {
	console.log("I am not false");
} else {
	console.log("I am false");
}
