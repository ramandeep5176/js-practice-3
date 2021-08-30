// const num1 = 30;
// const num2 = 230;

// function add() {
//   console.log(`the result is: ${num1 + num2}`);
// }
// add();
// (function () {
//   const m1 = 300;
//   const m2 = 530;
//   console.log(`the result is: ${m1 + m2}`);
// })();

// console.log(num1);

// // argument
// (function (m1, m2) {
//   console.log(`the result is: ${m1 + m2}`);
// })(10, 900);

// // assign
// const result = (function (m1, m2) {
//   console.log(`the result is: ${m1 + m2}`);
//   return m1 + m2;
// })(500, 5900);
// console.log(result);

// closure

// function outer() {
//   let privateVar = "sectret";
//   function inner() {
//     console.log(`hellllo: ${privateVar}`);
//   }
//   return inner;
// }
// // console.log(privateVar);

// outer()();

// // const value = outer()
// // console.log(value);
// // value()

function newAccount(name, initialbalance) {
  let balance = initialbalance;
  function showbalance() {
    console.log(`hey ${name}, your balance is ${balance}$s`);
  }
  function deposit(amount) {
    balance += amount;
    showbalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`hey ${name}, your balance is not sufficent`);
      return;
    }
    balance -= amount;
    showbalance();
  }

  return { showbalance: showbalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount("john", 3010);
const bobo = newAccount("bobo", 3500);

john.showbalance();
john.deposit(400)
bobo.showbalance();
bobo.withdraw(3500.0000000000000999999)
