const block1ButtonAll = document.querySelectorAll(".block1__button");

const block1ButtonHandler = () => {
  document.querySelector(".containerALL").scrollBy(0, window.innerHeight);
};

block1ButtonAll.forEach((el) => {
  el.addEventListener("click", block1ButtonHandler);
});
