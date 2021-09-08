// //
// //
// //
// //
// //
// //
// //
// //
// //
// // var number = 500;
// // console.log(number);
// // number = 10;
// // console.log(number);
// // var number = "org";
// // console.log(number);

// // let amo = 150;
// // console.log(amo);
// // amo = 50;
// // console.log(amo);
// // let amo = "so";
// // console.log(amo);

// // const tt = 100;
// // console.log(tt);
// // // tt = 88;

// // const dd={name:'bobb'}
// // dd.name='ram'
// // console.log(dd.name);

// //

// // var amount = 100;

// // function greet() {
// //   var random = "some ran";
// //   console.log(`hello ${amount} ${random}`);
// // }
// // // console.log();
// // // greet ()

// // let total = 1000;
// // let test = true;

// // if (test) {
// //   let total = "orng & on";
// //   let value='some'
// //   console.log("heel");
// // }

// // {
// //   let total = "ring";
// //   console.log(total);

// // }
// // {
// // let total = "ring";
// // console.log(total);
// // }

// // // console.log(value);
// // console.log(total);

// // const author = "some author";
// // const statement = "some statement";

// // const quote = highlight`here is ${statement} by ${author}and it's true.`;
// // console.log(quote);

// // const result = document.getElementById("result");
// // result.innerHTML = quote;

// // function highlight(text, ...vars) {
// //   const aewsomeText=text.map((item,index)=>{
// //       return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
// //   })
// //   return aewsomeText.join('')
// // }

// // const sayHi = () => console.log("hel");
// // sayHi();

// // const dob=value=> value*2
// // const num=dob(4)
// // // console.log(num);

// // const multiply=(num1,num2) =>{
// //     const result =num1*num2
// //     //
// //     return result
// // }

// // const sum=multiply(4,5)
// // // console.log(sum);

// // //
// // const object =() => ({name:'john',jj:45})
// // const person = object()
// // // console.log(person);

// // // arrow functions as call back

// // const numbers=[1,12,3,4,65,8,8]

// // const big= numbers.filter(number => number > 7 )
// // console.log(big);

// // const btn=document.querySelector('.btn')
// // btn.addEventListener('click',()=>console.log('yccjk'))

// // const btn = document.querySelector(".btn");

// // btn.addEventListener("click", function () {
// //   console.log(this);

// //   setTimeout( ()=> {
// //     this.style.color = "red";
// //   }, 2000);
// // });

// // const john = "john";
// // const pete = "pete";

// // function sayhi(person = "tim") {
// //   console.log(`hi ${person}`);
// // }
// // const sayhello = (person ='bob') => console.log(`hello ${person}`);

// // sayhi();
// // sayhello();

// // const fruits=['orange','gg','eh','euid']
// // const friends=['orawfnge','gwfeweg','ehwfwe','wfeweeuid']

// // const orange=fruits[0]
// // const gg=fruits[1]
// // const eh=fruits[2]
// // // console.log(orange,gg,eh);

// // const [orawfnge,,ehwfwe]=friends
// // console.log(orawfnge, ehwfwe);

// // let first = "bob";
// // let second = "john";
// // // let temp = second;
// // // second = first;
// // // first = temp;

// // [second,first]=[first,second]
// // console.log(first, second);

// // const bio = {
// //   first: "bob",
// //   last: "sam",
// //   city: "chic",
// //   siblings: {
// //     sister: "june",
// //   },
// // };

// // function printperson({ first, last, city }) {
// //   // const{first, last, city}=person
// //   console.log(first, last, city);
// // }
// // printperson(bio);

// // const {first:firstname,last,city,siblings:{sister:favs}}=bio
// // console.log(firstname, last, city,favs);

// // const person = "peter smith";
// // const employee = "2345-emp-perter-smith";
// // const manager = "23456-man-juhn-boe";

// // // console.log(manager.includes("juhn"));

// // const multiplyPeople=(person,amount=5)=> person.repeat(amount)

// // const people = multiplyPeople(person)
// // console.log(people);

// const fruits = ["orange", "apple", "lemon", "mango"];
// const longnames = "raman deep singh gill";
// // let shortname = "";

// // for (const letter of longnames) {
// //   //   console.log(letter);
// //   if (letter === " ") {
// //     continue;
// //   } else {
// //     shortname += letter;
// //   }
// // }
// // console.log(shortname);

// // for (const fruit of fruits) {
// //   if (fruit === "apple") {
// //     // break;
// //     continue;
// //   }
// //   console.log(fruit);
// // }
// // const udemy='udemy'
// // const letters=[...udemy]
// // console.log(letters);

// // const boys = ["raman", "deep singh gill"];
// // const girls = ["orange", "apple", "lemon", "mango"];
// // const best ='arnold'

// // const friends=[...boys,best,...girls]

// // // const newfriends=friends
// // const newfriends=[...friends]
// // newfriends[0]='karina'
// // console.log(newfriends);
// // console.log(friends);

// // const person={name:'john',job:'mac'}
// // const newperson={...person,city:'tor'}
// // console.log(person);
// // console.log(newperson);

// const headings=document.querySelectorAll('h1')
// const result=document.getElementById('result')

// // console.log(headings.map(item => console.log(item)));
// const text=[...headings]
// .map(item => `<span>${item.textContent}</span>`)
// .join('')

// result.innerHTML=text
// console.log(text);

// const numbers=[23,45,66,88,155,3165,51,163,156,165168,16,16,1864,6,165,165,465,165,135,413,1,651,984,1635,4984,54,94,165,498,49,46,798,4654,61,984,64,941,94,68,46,849,498,46,4984,984]

// console.log(Math.max(...numbers));

// const john=['john','sand']

// const sayhello=(name,last)=>{
//     console.log(`hello ${name}`);

// }

// sayhello(...john)

// const fruit = ["orange", "apple", "lemon", "mango", "lemon", "mango"];
// const [first,second, ...reset] = fruit;
// // console.log(first,second,reset);

// const person = { name: "john", job: "mac" };
// // const { job,...rest } = person;
// // console.log(job,rest);

// const getaverage=(name,...scores)=>{
//     console.log(name);
//     console.log(scores);
//     let total=0
//     for(const score of scores){
//         total +=score

//     }
//     console.log(`${name} average ${total/scores.length}`);
// }

// getaverage(person.name,75,464,189,8563,498,464,9687,466,84)

// const udemy = "udemy";

// function countTotal() {
//   // console.log(arguments);
//   let total = Array.from(arguments).reduce(
//     (total, currNum) => (total += currNum),
//     0
//   );
//   console.log(total);
// }

// countTotal(56,99, 56, 8, 9, 1, 398, 64);

// const p = document.querySelectorAll("p");
// const result = document.getElementById("result");
// const second = document.getElementById("second");

// let newText = Array.from(p);
// newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

// result.innerHTML = newText;

// const text = Array.from(document.querySelectorAll("p"), (item) => {
//   return `<span>${item.textContent}</span>`;
// }).join(' ');
// second.innerHTML=text

// console.log(text);

// const people = [
//   { id: 1, name: "raman" },
//   { id: 2, name: "raman2" },
//   { id: 3, name: "raman3" },
// ];

// const grades = ["a", "b", "c", "d"];
// const goodGrades = ["a", "b", "d"];

// // const raman3 = people.find((person) => person.name === "raman3");
// // console.log(raman3.name);

// // const person= people.findIndex(item=>item.id===3)
// // console.log(person);
// // const newPeople=people.slice(0,person)
// // console.log(newPeople);

// const allGoodGrades = grades.every((grade) => (grade = "c"));
// console.log(allGoodGrades);

