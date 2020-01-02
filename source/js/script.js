var buttonT = document.querySelector(".navigation__toggle")
var menuNav = document.querySelector(".navigation__menu")
var menuUser = document.querySelector(".site-list")

window.onload = function() {
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
