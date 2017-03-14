//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  var result = num * 10;
  return result;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  var resultSubstract = num -5;
  return resultSubstract;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if(str1.length === str2.length){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if(x === y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if(num < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if(num > 50){
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var resultAdd = x + y;
  return resultAdd;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var resultSub = x - y;
  return resultSub;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var divideNum = x / y;
  return divideNum;

}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var multiplyNum = x * y;
  return multiplyNum;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  var remainderDivision = x % y;
  return remainderDivision;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if((num % 2) == 0){
    return true;
  }
  return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if((num % 2) != 0){
    return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  //code here
  var square = num * num;
  return square;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var cube = num * num * num;
  return cube;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var numToPower = Math.pow(num, exponent);
  return numToPower;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var roundNum = Math.round(num);
  return roundNum;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var roundNumUp = Math.ceil(num);
  return roundNumUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var newstr = str + '!';
  return newstr;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var combine = firstName +' '+ lastName;
  return combine;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
 var stringHello = 'Hello ' + name + '!';
return stringHello;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var areaTriangle = (base * height)/2;
  return areaTriangle;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circleArea = Math.PI * (radius * radius);
  return Math.round(circleArea);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var area3d = length * width * height;
  return area3d;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
