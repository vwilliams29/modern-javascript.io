//function expression
const speak = function () {
  console.log("good day!");
};

greet();
greet();
greet();

// speak();
// speak();
// speak();

//function declartion
// function greet() {
//   console.log("hello there");
// }

// const greet = function(products, tax){
//   let total = 0
//   for (let i = 0; i< products.length; i++){
//     total += products[i] + products[i] * tax;

//   }
//   return total;
// }

let people = ["mario", "lugigi", "ryu", "shuan", "chun-11"];

const logPerson = (person, index) => {
  console.log(`%{index} - hello ${persom}`);
};
people.forEach(logPerson);
