const obj = document.querySelector('button.menu-bars');
const popup = document.querySelector('.popup-links');
const cross = document.querySelector('.close-popup');
const popupLinks = document.querySelectorAll('a.nav-link.bigger');

const handleHamburger = (e) => {
  e.stopPropagation();
  popup.classList.replace('untoggled', 'toggled');

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

obj.addEventListener('click', (e) => { handleHamburger(e); });

const handleClose = (e) => {
  e.stopPropagation();
  popup.classList.replace('toggled', 'untoggled');

  window.onscroll = () => {};
};

popupLinks.forEach((link) => {
  link.addEventListener('click', (e) => { handleClose(e); });
});

cross.addEventListener('click', (e) => { handleClose(e); });
