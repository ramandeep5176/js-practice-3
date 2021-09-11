const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const container = document.querySelector(".img-container");
const btn = document.querySelector(".btn");
const url = "https://source.unsplash.com/user/erondu";
btn.addEventListener("click", () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`failed to load img from src${url}`));
    });
    img.src = url;
  });
}
