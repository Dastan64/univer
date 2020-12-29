let helpBtn = document.querySelector(".univer-help-btn");
let loginBtn = document.querySelector(".univer-login-btn");
let popup = document.querySelector(".univer-popup");
let popupColoredLayer = document.querySelector(".univer-colored-layer");
let closeButton = document.querySelector(".univer-close-popup");
let switches = document.querySelectorAll(".switch-container");
let loginInput = document.getElementById("login");
let passwordInput = document.getElementById("password");
let form = document.querySelector(".univer-form");

document.addEventListener("DOMContentLoaded", function () {
  loginInput.focus();
});

helpBtn.addEventListener("click", showPopUpWindow);

function showPopUpWindow(e) {
  //pop-up окно об информации для студентов и преподавателей
  e.preventDefault();
  popup.style.display = "block";
  document.body.classList.add("body-no-scroll");
}

closeButton.addEventListener("click", () => {
  //закрытие pop-up окна при нажатии на крестик
  popup.style.display = "none";
  document.body.classList.remove("body-no-scroll");
});

window.onclick = function (event) {
  //скрытие pop-up окна при нажатии не только на крестик, но и на затемнённую область
  if (event.target == popup) {
    popup.style.display = "none";
    document.body.classList.remove("body-no-scroll");
  }
};

let darkColor = "#1e0521";
let lightColor = "#678fc2";

for (let i = 0; i < switches.length; i++) {
  switches[i].addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.querySelector('input[type="checkbox"]').checked = false;
      document.body.classList.toggle("body-light");
      loginBtn.classList.toggle("login-btn-lightMode");
      helpBtn.classList.toggle("help-btn-lightMode");
      popupColoredLayer.style.backgroundColor = lightColor;
    } else {
      this.classList.add("active");
      this.querySelector('input[type="checkbox"]').checked = true;
      document.body.classList.toggle("body-light");
      loginBtn.classList.toggle("login-btn-lightMode");
      helpBtn.classList.toggle("help-btn-lightMode");
      popupColoredLayer.style.backgroundColor = darkColor;
    }
  });
}

form.addEventListener("submit", function () {
  alert(
    `Your login: ${loginInput.value}. Password: ${passwordInput.value}. This data is not sent anywhere.`
  );
});
