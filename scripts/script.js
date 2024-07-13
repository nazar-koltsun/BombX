// Copy button
const copyBtn = document.querySelector('.copy-btn');
const code = document.querySelector('.code');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(code.textContent);
})

// String carousel
const createCarousel = (selector) => {
  const splide = new Splide(selector, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 16,
    arrows: false,
    pagination: false,
    drag: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1800: {
        perPage: 12,
      },
      1600: {
        perPage: 10,
      },
      1200: {
        perPage: 8,
      },
      900: {
        perPage: 6,
      },
      600: {
        perPage: 5,
      },
    }
  });
  splide.mount(window.splide.Extensions);
}

createCarousel('.promo-string-carousel');
createCarousel('.promo-string-carousel-two');
