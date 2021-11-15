//Syntax Basics & Types (Tutorial #2)
// alert('hello, world');

// console.log(1);
// console.log(2);

//let age = 25;
//let year = 2019;

//log things to console
//console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

//var score = 75
//console.log(score);

//stings
console.log('hello, world');

let email = 'venushugo@hotmail.com';
console.log(email);

//string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName +  ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods

//let emailResult = email.lastIndexOf('n');

//let emailResult = email.slice(2,5);

//let emailResult = email.subste(4,8);

let emailResult = email.replace ('m', 'w');
console.log(emailResult);

//Numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, - , * , / , ** , %

//console.log(10/2);
//let numResult = radius % 3;
//let numResult = pi * radius**2;

//Order of operations P E M D A S

let numResult = 5 * (10-3)**2;
console.log(numResult);


let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;
likes += 10;

console.log(likes);

//let likeResult = 'the blog has '+  likes  + ' likes';
//console.log(likeResult);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

//concatenation way
//let exResult = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
//console.log(exResult);

//template string way
let strResult = 'The blog called ${title} by ${author} has ${like} likes' ;
console.log(strResult);
