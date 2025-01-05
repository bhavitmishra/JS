const item = document.querySelector("#Add");
const butt = document.querySelector("button");
const cont = document.querySelector(".contents");

butt.addEventListener("click", (e) => {
  e.preventDefault();
  const data = item.textContent;
  cont.appendChild(data);
});
