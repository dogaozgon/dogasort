// Core DogaSort Algorithm, accepts an array of non-negative integers and
// returns the unique elements in an ascending order.
// By default DogaSort sorts and removes duplicates simultaneously.
function dogaSort(inputArray) {
	let sortedArray = [];
	inputArray.forEach((el) => (sortedArray[el] = el));
	return sortedArray.filter((item) => item !== null);
}

// dogaSortFindMin accepts an array of non-negative integers and
// returns the minimum value
function dogaSortFindMin(inputArray) {
	let sortedArray = [];
	inputArray.forEach((el) => (sortedArray[el] = el));
	return sortedArray.find((item) => item !== undefined);
}

// dogaSortFindMax accepts an array of non-negative integers and
// returns the maximum value
function dogaSortFindMax(inputArray) {
	let sortedArray = [];
	inputArray.forEach((el) => (sortedArray[el] = el));
	return sortedArray.pop();
}

// DogaSortPN, is a DogaSort implementation that accepts an array that may contain positive or negative integer values and
// returns a sorted array with unique values in an ascending order
function dogaSortPN(inputArray) {
	let sortedPositive = [];
	let sortedNegative = [];
	inputArray.forEach((el) =>
		el >= 0 ? (sortedPositive[el] = el) : (sortedNegative[-el] = -el)
	);
	sortedPositive = sortedPositive.filter((item) => item !== null);
	sortedNegative = sortedNegative.filter((item) => item !== null);
	sortedNegative = sortedNegative.reverse().map((el) => -el);
	return [...sortedNegative, ...sortedPositive];
}

// DogaSortFindMinPN, accepts an integer array that may contain positive or negative values and
// returns the minimum value
function dogaSortFindMinPN(inputArray) {
	let sortedPositive = [];
	let sortedNegative = [];
	inputArray.forEach((el) =>
		el >= 0 ? (sortedPositive[el] = el) : (sortedNegative[-el] = -el)
	);
	sortedPositive = sortedPositive.filter((item) => item !== null);
	sortedNegative = sortedNegative.filter((item) => item !== null);
	return sortedNegative.length === 0
		? sortedPositive[0]
		: -sortedNegative.pop();
}

// DogaSortFindMaxPN, accepts an integer array that may contain positive or negative values and
// returns the maximum value
function dogaSortFindMaxPN(inputArray) {
	let sortedPositive = [];
	let sortedNegative = [];
	inputArray.forEach((el) =>
		el >= 0 ? (sortedPositive[el] = el) : (sortedNegative[-el] = -el)
	);
	sortedPositive = sortedPositive.filter((item) => item !== null);
	sortedNegative = sortedNegative.filter((item) => item !== null);
	return sortedPositive.length === 0
		? sortedNegative.find((item) => item !== undefined)
		: sortedPositive.pop();
}

//demo
console.log("//////////////START OF DOGASORT DEMO///////////////");

const numbers = [3, 6, 2, 8, 2, 7, 4, 9, 1, 85, 42];
console.log("DogaSorted integer array: ");
console.log(dogaSort(numbers));

console.log("dogaSortFindMin:");
console.log(dogaSortFindMin(numbers));

console.log("dogaSortFindMax:");
console.log(dogaSortFindMax(numbers));

console.log("Original unchanged integer array:");
console.log(numbers);

const pnNumbers = [4, 1, -5, 7, -8, 1, 9, 3, -4, -5, -78, 64];
console.log(
	"dogaSortPN sorted array that contains positive and negative integers:"
);
console.log(dogaSortPN(pnNumbers));

console.log("dogaSortFindMinPN result:");
console.log(dogaSortFindMinPN(pnNumbers));

console.log("dogaSortFindMaxPN result:");
console.log(dogaSortFindMaxPN(pnNumbers));
