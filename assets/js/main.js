/**
 * @author Heatscar
 * 
 */

// Preloader, no cambiar
$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});

function start() {
  var btnYes = document.querySelector(".btn--yes");
  var btnNo = document.querySelector(".btn--no");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");
  var btnClose = document.querySelector(".btn-close");
  var headerModar = document.querySelector(".heading-name");
  var desccriptionModar = document.querySelector(".message");


  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
            ${CONFIGDATA.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${CONFIGDATA.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;
  btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${CONFIGDATA.buttonYes}`;
  btnNo.innerHTML = `<i class="ti-thumb-down"></i> ${CONFIGDATA.buttonNo}`;
  headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class="ti-heart"></i>`;
  desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

  btnYes.onclick = () => {
    popup.classList.add("show");
  };
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  btnNo.onclick = () => {
    btnNo.style.top = 100 + "px";
    btnYes.style.top = 280 + "px";
  };

  // btnNo.onmouseover = (e) => {
  //   var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
  //   var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
  //   btnNo.style.top = x + "px";
  //   btnNo.style.right = y + "px";
  // };

  // btnNo.onclick = (e) => {
  //   var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
  //   var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
  //   btnNo.style.top = x + "px";
  //   btnNo.style.right = y + "px";
  // };
  // const btnNo = document.getElementById("btnNo");

// Función para verificar si el usuario está en un dispositivo táctil
const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Función para mover el botón
const moveButton = (e) => {
    const parent = btnNo.parentElement; // Contenedor padre del botón
    const maxX = parent.clientWidth - btnNo.clientWidth;
    const maxY = parent.clientHeight - btnNo.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = "absolute";
    btnNo.style.top = `${y}px`;
    btnNo.style.left = `${x}px`;
};

// Aplicar eventos según el tipo de dispositivo
if (isTouchDevice()) {
    btnNo.addEventListener("click", moveButton);
} else {
    btnNo.addEventListener("mouseover", moveButton);
}
}

start();
