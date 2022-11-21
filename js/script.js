const getId = (id) => document.getElementById(`${id}`);
const toggle = getId("toggle");
const nav = getId("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
