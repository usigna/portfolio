// for production only
window.onerror = function(message, url, lineNumber) {  
  return true;
};

function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
}

function blobAnimate() {
  const blobBtn = document.querySelector('.blob-btn');
  const blobBtnImage = blobBtn.querySelector('img');
  const blobImage = document.querySelector('.blob-img');

  blobBtn.addEventListener('click', function() {
    if (blobBtnImage.classList.contains('pause')) {
      blobImage.src = 'img/blob.svg';
      blobBtnImage.src = 'img/play-solid.svg';
      blobBtnImage.alt = 'Wznów animację.';
      blobBtnImage.classList.add('padding-left');
      blobBtnImage.classList.remove('pause');
    } else {
      blobImage.src = 'img/blob-animate.svg';
      blobBtnImage.src = 'img/pause-solid.svg';
      blobBtnImage.alt = 'Zatrzymaj animację.';
      blobBtnImage.classList.remove('padding-left');
      blobBtnImage.classList.add('pause');
    }
  })
};

const init = function () {
  showHamburgerMenu();
  blobAnimate();
};

document.addEventListener('DOMContentLoaded', init);