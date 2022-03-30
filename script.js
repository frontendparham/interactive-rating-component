'use strict';

const mainSection = document.querySelector('.rating');
const rateButtons = Array.from(document.querySelectorAll('.rating__button'));
const submitButton = document.querySelector('.rating__submit');
const thankSection = document.querySelector('.thank');
const thankText = document.querySelector('.thank__rate');

rateButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    rateButtons.forEach(btn => {
      if (btn.classList.contains('rating__button--clicked'))
        btn.classList.remove('rating__button--clicked');
    });
    btn.classList.toggle('rating__button--clicked');
  });
});

submitButton.addEventListener('click', function () {
  const clickedBtn = rateButtons.find(btn =>
    btn.classList.contains('rating__button--clicked')
  ).textContent;

  mainSection.style.opacity = 0;
  mainSection.style.visibility = 'hidden';

  thankSection.style.opacity = 1;
  thankSection.style.visibility = 'visible';

  thankText.textContent = `You selected ${clickedBtn} out of 5`;
});
