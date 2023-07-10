document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.nav-link');
  var navbarToggler = document.querySelector('.navbar-toggler');

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      if (window.innerWidth <= 767) {
        navbarToggler.click();
      }
    });
  }
});
