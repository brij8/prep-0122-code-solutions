/*
function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);
*/

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var add2 = addTwoNumbers(2, 2);
console.log('add2', add2);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var world = getGreeting('World');
console.log(world);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMult = addAndMultiplyBy5(10, 5);
console.log('addMult', addMult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multDiv = multiplyAndDivideBy5(35, 10);
console.log('multDiv', multDiv);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var sub2 = subtractTwoNumbers(22, 7);
console.log('sub2', sub2);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}

var getCirc = getCircleCircumference(5);
console.log('getCirc', getCirc);

function getFullName(firstName, LastName) {
  return firstName + ' ' + LastName;
}

var getName = getFullName('Juan', 'Ramirez');
console.log('getName', getName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cubed', cubed);
