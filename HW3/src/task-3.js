var arr = [1, 2, 3];
var initialValue = 0;
var result = arr.reduce(function (accumulator, value) { return accumulator + value; }, initialValue);
console.log(result);
