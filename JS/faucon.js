const bouton = document.querySelector(".faucon-btn");
const faucon = document.getElementById("faucon");

bouton.addEventListener("click", () => {
  faucon.classList.add("faucon-active");
});
