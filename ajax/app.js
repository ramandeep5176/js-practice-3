//
//
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const rrr = new XMLHttpRequest();
  // console.log(rrr);

  rrr.open("GET", url);
  rrr.onreadystatechange = function () {
    if (rrr.readyState === 4 && rrr.status === 200) {
      const data = JSON.parse(rrr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join(" ");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
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

// console.log(`hello `);
