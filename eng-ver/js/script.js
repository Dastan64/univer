let helpBtn = document.querySelector('.univer-help-btn');
let loginBtn = document.querySelector('.univer-login-btn');
let popup = document.querySelector('.univer-popup');
let popupColoredLayer = document.querySelector('.univer-colored-layer');
let closeButton = document.querySelector('.univer-close-popup');
let switches = document.querySelectorAll('.switch-container');

helpBtn.addEventListener('click', showPopUpWindow);

function showPopUpWindow(e) { //pop-up окно об информации для студентов и преподавателей
    e.preventDefault();
    popup.style.display = 'block';
    document.body.classList.add('body-no-scroll');
}

closeButton.addEventListener('click', () => { //закрытие pop-up окна при нажатии на крестик
    popup.style.display = 'none';
    document.body.classList.remove('body-no-scroll');
});

window.onclick = function(event) { //скрытие pop-up окна при нажатии не только на крестик, но и на затемнённую область
    if (event.target == popup) {
        popup.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
    }
}        

let darkColor = "#1e0521";
let lightColor = "#66a5ad";

for (let i=0; i < switches.length; i++) {
    switches[i].addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            this.querySelector('input[type="checkbox"]').checked = false;
            document.body.style.backgroundColor = lightColor;
            loginBtn.style.backgroundColor = "#FCE38A";
            loginBtn.style.borderColor = "#FCE38A";
            helpBtn.style.borderColor = "#F38181";
            helpBtn.style.backgroundColor = "#F38181";
            popupColoredLayer.style.backgroundColor = lightColor;
        }
        else {
            this.classList.add('active');
            this.querySelector('input[type="checkbox"]').checked = true;
            document.body.style.backgroundColor = darkColor;
            loginBtn.style.backgroundColor = "#fecc50";
            loginBtn.style.borderColor = "#fecc50";
            helpBtn.style.borderColor = "#010b8b";
            helpBtn.style.backgroundColor = "#010b8b";
            popupColoredLayer.style.backgroundColor = darkColor;
        }
    })
}