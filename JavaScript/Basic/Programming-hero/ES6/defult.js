function defaultAdd(firstName, lastName) {
	return firstName + lastName;
}
const totalAdd = defaultAdd("Romana", "Khatun");
console.log(totalAdd);

function Number(firstNumber, lastNumber = 1) {
	return firstNumber + lastNumber;
}
const numberAdd = Number(01734567765);
console.log(numberAdd);
