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

const author = "some author";
const statement = "some statement";

const quote = highlight`here is ${statement} by ${author}and it's true.`;
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function highlight(text, ...vars) {
  const aewsomeText=text.map((item,index)=>{
      return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  })
  return aewsomeText.join('')
}
