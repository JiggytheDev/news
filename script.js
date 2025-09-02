const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const content = document.querySelector(".links");

openBtn.addEventListener("click", () => {
    content.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    content.style.display = "none";
});