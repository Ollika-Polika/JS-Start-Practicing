//1. Build a function that does currency converter from USD to UAH (1 USD = 8 UAH)

function convert(amount) {
	let hryvnia = amount * 8;
  return hryvnia.toFixed(2);
}
console.log(convert(2));

//2. A function which returns reversed string
function reverse (str) {
	let newArr = str.split("");
	let newArrReverse = newArr.reverse();
	let newStr = newArrReverse.join('');
	return newStr;
}
console.log(reverse('abc'));

// 3. A function which prints the stair picture of size n
function countWays(n) {
	for (i=1; i<=n; i++) {
		let stair = '#';
		let stairs = stair.repeat(i);
		console.log(stairs);
	}
}
countWays(3);

//4. A function which returns total sum of a range
function sumRange(start, end) { 
  let myArr = [];
    for (let i = start; i <= end; i++)
    myArr.push(i);
    return myArr.reduce(function(a, b){
    return a + b;   
  });
};
console.log(sumRange(2, 4));
console.log(sumRange(-1, 3));

//5. Write a function which returns the smallest of three numbers.
function min(a, b, c) {
  let minVal = Math.min(a, b, c);
  return minVal;
}
console.log(min(10, 5, 11));
console.log(min(3, 8, 4));

//6. A function which prints the pyramid picture of size n
function printPyramid(n) {
	for (index = 1; index <= n; index = index + 2) {
		let stair = '#';
		let stairs = stair.repeat(index);
		let space = ' ';
		let spaces = space.repeat(n-index/2);
		let spaceStairs = spaces + stairs;
		console.log(spaceStairs);
	}
}
printPyramid(5);

//7. A function which transforms first and last letter to uppercase
function firstAndLastToUpper(str) {
   let res = str[0].toUpperCase() + str.substring(1, str.length - 1) + str[str.length -1].toUpperCase();
   return res;
}
console.log(firstAndLastToUpper('abc'));

//8. A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.!!!!!!!!!!!!!!!!!
function cursorCheck(str) {
  let result = str.search(new RegExp('ostap|cursor|ironman', 'i'));
  access = (result > 0) ? true : false; 
  return access;
}
console.log(cursorCheck('Hello I am OstaP'));
console.log(cursorCheck('Superman is here'));

//9. A function which returns a string with all letters in uppercase
function toUppercase(str) {
   let  toUp = '';
   for (let i = 0; i < str.length; i++) {
      toUp += String.fromCharCode(str.charCodeAt(i) & 223);
   }
   console.log(toUp);
}
toUppercase('abc');

//10. A function which removes duplication of letters in string. The function must be case-insensitive.
function removeDuplicationLetters(str) {
	let strArr = str.toLowerCase().split('');
  let newArr = [];
  let len = strArr.length;
    for (let i = 0; i < len; i++) {
    	if (newArr.indexOf(strArr[i]) === -1) {
        newArr.push(strArr[i]);
      } else if ((strArr[i]) === " ") {
        newArr.push(strArr[i]);
      }
    }
  console.log(newArr.join(' '));
}
removeDuplicationLetters("Hello I am Iron Man");

//11. A function that when given a number n returns the n-th number in the Fibonacci Sequence.
function fibonacci(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));