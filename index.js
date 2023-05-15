let allItems__links = document.querySelectorAll(".links__item");

allItems__links.forEach((el) => {
  console.log("повесил событие на клик");
  el.addEventListener("click", () => {
    el.querySelector("a").click();
  });
});

window.addEventListener("click", () => {
  console.log("click");
});
