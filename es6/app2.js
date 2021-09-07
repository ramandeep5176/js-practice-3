//
//
//
//
//
//
//
//
//
// var number = 500;
// console.log(number);
// number = 10;
// console.log(number);
// var number = "org";
// console.log(number);

// let amo = 150;
// console.log(amo);
// amo = 50;
// console.log(amo);
// let amo = "so";
// console.log(amo);

// const tt = 100;
// console.log(tt);
// // tt = 88;

// const dd={name:'bobb'}
// dd.name='ram'
// console.log(dd.name);

//

// var amount = 100;

// function greet() {
//   var random = "some ran";
//   console.log(`hello ${amount} ${random}`);
// }
// // console.log();
// // greet ()

// let total = 1000;
// let test = true;

// if (test) {
//   let total = "orng & on";
//   let value='some'
//   console.log("heel");
// }

// {
//   let total = "ring";
//   console.log(total);

// }
// {
// let total = "ring";
// console.log(total);
// }

// // console.log(value);
// console.log(total);

// const author = "some author";
// const statement = "some statement";

// const quote = highlight`here is ${statement} by ${author}and it's true.`;
// console.log(quote);

// const result = document.getElementById("result");
// result.innerHTML = quote;

// function highlight(text, ...vars) {
//   const aewsomeText=text.map((item,index)=>{
//       return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
//   })
//   return aewsomeText.join('')
// }

// const sayHi = () => console.log("hel");
// sayHi();

// const dob=value=> value*2
// const num=dob(4)
// // console.log(num);

// const multiply=(num1,num2) =>{
//     const result =num1*num2
//     //
//     return result
// }

// const sum=multiply(4,5)
// // console.log(sum);

// //
// const object =() => ({name:'john',jj:45})
// const person = object()
// // console.log(person);

// // arrow functions as call back

// const numbers=[1,12,3,4,65,8,8]

// const big= numbers.filter(number => number > 7 )
// console.log(big);

// const btn=document.querySelector('.btn')
// btn.addEventListener('click',()=>console.log('yccjk'))

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log(this);

//   setTimeout( ()=> {
//     this.style.color = "red";
//   }, 2000);
// });

// const john = "john";
// const pete = "pete";

// function sayhi(person = "tim") {
//   console.log(`hi ${person}`);
// }
// const sayhello = (person ='bob') => console.log(`hello ${person}`);

// sayhi();
// sayhello();

// const fruits=['orange','gg','eh','euid']
// const friends=['orawfnge','gwfeweg','ehwfwe','wfeweeuid']

// const orange=fruits[0]
// const gg=fruits[1]
// const eh=fruits[2]
// // console.log(orange,gg,eh);

// const [orawfnge,,ehwfwe]=friends
// console.log(orawfnge, ehwfwe);

// let first = "bob";
// let second = "john";
// // let temp = second;
// // second = first;
// // first = temp;

// [second,first]=[first,second]
// console.log(first, second);

// const bio = {
//   first: "bob",
//   last: "sam",
//   city: "chic",
//   siblings: {
//     sister: "june",
//   },
// };

// function printperson({ first, last, city }) {
//   // const{first, last, city}=person
//   console.log(first, last, city);
// }
// printperson(bio);

// const {first:firstname,last,city,siblings:{sister:favs}}=bio
// console.log(firstname, last, city,favs);

// const person = "peter smith";
// const employee = "2345-emp-perter-smith";
// const manager = "23456-man-juhn-boe";

// // console.log(manager.includes("juhn"));

// const multiplyPeople=(person,amount=5)=> person.repeat(amount)

// const people = multiplyPeople(person)
// console.log(people);

const fruits = ["orange", "apple", "lemon", "mango"];
const longnames = "raman deep singh gill";
let shortname = "";

for (const letter of longnames) {
  //   console.log(letter);
  if (letter === " ") {
    continue;
  } else {
    shortname += letter;
  }
}
console.log(shortname);

for (const fruit of fruits) {
  if (fruit === "apple") {
    // break;
    continue;
  }
  console.log(fruit);
}
