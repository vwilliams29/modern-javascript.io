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

do{
  console.log('val of is: ', i);
  i++;
} while(i < 5);

//if statments
//const age = 25;

//if(age > 20){
// console.log('you are over 20 years old');
//}

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.length > 4){
// console.log("that's a lot of ninjas");
//}

const password = 'p@ss';

//if(password.length >= 8){
//  console.log('that password is long enough!');
//}

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@')){
  console.log('that password is long enough!');
} else {
  console.log('password is not long enough');
}

// logical NOT (!)

let user = false;

if(user){

}

console.log(!true);
console.log(!false);
