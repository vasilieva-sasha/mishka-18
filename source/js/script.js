var buttonT = document.querySelector(".navigation__toggle");
var menuNav = document.querySelector(".navigation__menu");
var menuUser = document.querySelector(".site-list");

window.onload = function() {
    menuNav.classList.add("navigation__menu--closed");
    menuUser.classList.add("site-list--closed");
    this.buttonT.classList.remove("navigation__toggle--opened");
  };

  buttonT.addEventListener("Touch", function(evt) {
    evt.preventDefault();
    if (buttonT.contains(!"navigation__toggle--opened")) {
      buttonT.remove("navigation__toggle--opened");
      menuNav.add("navigation__menu--closed");
      menuUser.classList.add("site-list--closed");
    } else {
      var show = function show() {
        buttonT.add("navigation__toggle--opened");
        menuNav.remove("navigation__menu--closed");
        menuUser.classList.remove("site-list--closed");
      };
  }
    buttonT.add("navigation__toggle--opened");
    menuNav.remove("navigation__menu--closed");
    menuUser.classList.remove("site-list--closed");
});