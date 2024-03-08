function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

function useCustomCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorScale = document.querySelectorAll('.cursor-scale');
  let mouseX = 0;
  let mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })
    }
  });
  
  window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-small');
    });

    link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      cursor.classList.remove('grow-small');

      if(link.classList.contains('small')) {
        cursor.classList.remove('grow');
        cursor.classList.add('grow-small');
      }
    });
  });
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

function contentAnimation() {
  const tl = gsap.timeline();

  tl.to('.animate', {
    duration: 1,
    x: 0,
    y: 0,
    scale: 1,
    stagger: 0.2,
    delay: 0.1
  })

  useCustomCursor();
}

const init = function() {
  useCustomCursor();
  showHamburgerMenu();
  contentAnimation();
};

document.addEventListener('DOMContentLoaded', init);