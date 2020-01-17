var buttonT = document.querySelector(".navigation__toggle")
var menuNav = document.querySelector(".navigation__menu")
var menuUser = document.querySelector(".site-list")
var modal = document.querySelector(".modal")
var buttonCart = document.querySelectorAll(".js-button-cart")
var overlay = document.querySelector(".modal__overlay-js")
var buttonAdd = document.querySelector(".modal__button")

window.onload = function() {
    buttonT.classList.remove("navigation__toggle--no-js");
    menuNav.classList.add("navigation__menu--closed");
    menuUser.classList.add("site-list--closed");
    buttonT.classList.remove("navigation__toggle--opened");
  };

  buttonT.addEventListener("click", function(evt) {
    evt.preventDefault();
    buttonT.classList.toggle("navigation__toggle--opened")
    menuNav.classList.toggle("navigation__menu--opened")
    menuUser.classList.toggle("site-list--opened")
  });

  if ("buttonCart") {
    for (var i = 0; i < buttonCart.length; i++) {
      buttonCart[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.add("modal--js-show");
        overlay.classList.add("modal--js-show");
      })
    };

    if ("buttonAdd") {
      buttonAdd.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal--js-show");
        overlay.classList.remove("modal--js-show");
      })
    };

    if ("overlay") {
      overlay.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.classList.remove("modal--js-show");
        overlay.classList.remove("modal--js-show");
      })
    };

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
          modal.classList.remove("modal--js-show");
          overlay.classList.remove("modal--js-show");
      }
  })};
