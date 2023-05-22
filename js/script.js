/*const slides = document.querySelectorAll('.project');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
slides[slideIndex].classList.add('active');

function showPrevSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex--;
  slides[slideIndex].classList.add('active');
  if (slideIndex === 0) {
    prevBtn.disabled = true;
  }

  nextBtn.classList.remove('last');
}

function showNextSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex++;
  slides[slideIndex].classList.add('active');
  if (slideIndex === slides.length - 1) {
    nextBtn.classList.add('last');
  }
  prevBtn.disabled = false;
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);*/

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
slides[slideIndex].classList.add('active-slide');

function showPrevSlide() {
  slides[slideIndex].classList.remove('active-slide');
  slideIndex--;
  slides[slideIndex].classList.add('active-slide');
  if (slideIndex === 0) {
    prevBtn.disabled = true;
  }
  nextBtn.classList.remove('last');
}

function showNextSlide() {
  slides[slideIndex].classList.remove('active-slide');
  slideIndex++;
  slides[slideIndex].classList.add('active-slide');
  if (slideIndex === slides.length - 1) {
    nextBtn.classList.add('last');
  }
  prevBtn.disabled = false;
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);


