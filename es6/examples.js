const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  //1
  setTimeout(() => {
    heading1.style.color = "red";
    // 2
    setTimeout(() => {
      heading2.style.color = "blue";
      // 3
      setTimeout(() => {
        heading3.style.color = "green";
      }, 1200);
      // 3
    }, 1100);
    // 2
  }, 1000);
  // 1
});
