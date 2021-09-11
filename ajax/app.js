//
//
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    getData()
});
function getData() {
  const rrr = new XMLHttpRequest();
  // console.log(rrr);

  rrr.open("GET", "./api/sample.txt");
  rrr.onreadystatechange = function () {
    if (rrr.readyState === 4 && rrr.status === 200) {
      const text = document.createElement("p");
      text.textContent = rrr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: rrr.status,
        text: rrr.statusText,
        state: this.readyState,
      });
    }
  };
  rrr.send();
}

console.log(`hello `);
