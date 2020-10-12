const body = document.querySelector('body');

const navHandler = () => {
  const nav = document.querySelector('.Nav');
  const navLogo = document.querySelector('.Nav__logo');
  const navSecondary = document.querySelector('.Nav__secondary');

  if (window.scrollY >= 32) {
    nav.classList.add('Nav--fixed');
    navLogo.classList.add('Nav__logo--show');
    navSecondary.classList.add('Nav__secondary--hidden');
    return;
  }
  nav.classList.remove('Nav--fixed');
  navLogo.classList.remove('Nav__logo--show');
  navSecondary.classList.remove('Nav__secondary--hidden');
};

window.addEventListener('scroll', navHandler);
