gsap.registerPlugin(ScrollTrigger);

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
};

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

function scrollEffect() {
  const animateItems = document.querySelectorAll('.animate');

  for (let i = 0; i < animateItems.length; i++) {
    gsap.fromTo(animateItems[i], {scale: '0', opacity: 0}, {scale: '1', opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: animateItems[i],
      start: 'top 90%'
    }})
  }
};

function showAnimations() {
  const mobile = window.matchMedia('screen and (min-width: 1200px)');

  if (mobile.matches) {
    scrollEffect();
  }

  mobile.addListener( function(mobile) {
      if (mobile.matches) {
        scrollEffect();
      }
  });
};

const init = function () {
  showHamburgerMenu();
  blobAnimate();
  showAnimations();
};

document.addEventListener('DOMContentLoaded', init);