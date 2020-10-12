const body = document.querySelector('body');

const navHandler = () => {
  if (window.innerWidth <= 768) return;
  const nav = document.querySelector('.Nav');
  const navLogo = document.querySelector('.Nav__logo');
  const navSecondary = document.querySelector('.Nav__secondary');
  const firstSection = document.querySelector('.FirstSection');
  const navHeight = document.querySelector('.Nav__main').offsetHeight;

  if (window.scrollY >= 32) {
    // Fix navigation
    nav.classList.add('Nav--fixed');
    navLogo.classList.add('Nav__logo--show');
    navSecondary.classList.add('Nav__secondary--hidden');

    // Add margin for fixed navigation
    firstSection.style.marginTop = `${navHeight + 25}px`;
    return;
  }
  // Unfix navigation
  nav.classList.remove('Nav--fixed');
  navLogo.classList.remove('Nav__logo--show');
  navSecondary.classList.remove('Nav__secondary--hidden');
  firstSection.style.marginTop = '0px';
};

window.addEventListener('scroll', navHandler);
