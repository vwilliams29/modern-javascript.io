// for loops

//for(let i = 0; i < 5; i++){
//  console.log('in loop:', i);
//}

//console.log ('loop finished');

//const names = ['shaun', 'mario', 'luigi'];

//for(let i = 0; i < names.length; i++){
//console.log(names[i]);
//  let html = `<div>${names[i]}</div>`
//  console.log(html);
//}

//wild loops

let i = 5;

do {
  console.log("val of is: ", i);
  i++;
} while (i < 5);

//if statments
//const age = 25;

//if(age > 20){
// console.log('you are over 20 years old');
//}

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.length > 4){
// console.log("that's a lot of ninjas");
//}

const password = "p@ss";

//if(password.length >= 8){
//  console.log('that password is long enough!');
//}

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("that password is long enough!");
} else {
  console.log("password is not long enough");
}

// logical NOT (!)

let user = false;

if (user) {
  console.log("you must be logged in to continue");
}

console.log(!true);
console.log(!false);

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  console.log("your score: ", scores[i]);

  if(scores[i]) === 100){
    console.log('congrats, you got the top score!');
    break;

  
  }
}

//switch statements
const grade = 'C';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got an B!');
    break;
  case 'C':
    console.log('you got an C!');
    break;
  case 'D':
    console.log('you got an D!');
    break;
    case 'E':
    console.log('you got an E!');
    break;
    default:
      console.log('not vaild grade');
     
}