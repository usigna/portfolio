function stopAnimations() {
  const btn = document.querySelector('.accessibility-options__btn');
  const typingText = document.querySelector('.typing-text');
  const blobImage = document.querySelector('.blob-img');
  // const offerImage = document.querySelector('.offer__item--animation img');
  const duckyImage = document.querySelector('.ducky-contact');

  btn.addEventListener('click', function() {

    if (btn.classList.contains('play')) {
      typingText.classList.remove('typing-text--animate');
      blobImage.src = 'img/blob.svg';
      // offerImage.style.animation = '0';
      duckyImage.style.animation = '0';
      btn.classList.remove('play');
    } else {
      typingText.classList.add('typing-text--animate');
      blobImage.src = 'img/blob-animate.svg';
      // offerImage.style.animation = 'swinging 2s linear infinite';
      duckyImage.style.animation = 'swinging-small 2.5s linear infinite';
      btn.classList.add('play');
    }
  })
};

function changeSlide() {
  const slidesContainer = document.querySelector(".posts");
  const slide = document.querySelector(".posts__item");
  const prevButton = document.querySelector(".slider__btn--left");
  const nextButton = document.querySelector(".slider__btn--right");

  nextButton.addEventListener("click", function() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", function() {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}

const init = function () {
  stopAnimations();
  changeSlide();
};

document.addEventListener('DOMContentLoaded', init);