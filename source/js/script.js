let navMain = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-menu__toggle');

navMain.classList.remove('.nav-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-menu--closed')) {
    navMain.classList.remove('nav-menu--closed');
    navMain.classList.add('nav-menu--opened');
  } else {
    navMain.classList.add('nav-menu--closed');
    navMain.classList.remove('nav-menu--opened');
  }
});
