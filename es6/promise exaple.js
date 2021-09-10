const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve("its true");
  } else {
    reject(`error maybe`);
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((ror) => {
    console.log(ror);
  });
