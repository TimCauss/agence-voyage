const login = document.getElementById("login");
const register = document.getElementById("register");

const createBtn = document.querySelector(".link-create");
const registerBtn = document.querySelector(".link-connect");

createBtn.addEventListener("click", () => {
  login.classList.add("login-active");
  register.classList.add("register-active");
});

registerBtn.addEventListener("click", () => {
  login.classList.remove("login-active");
  register.classList.remove("register-active");
});
