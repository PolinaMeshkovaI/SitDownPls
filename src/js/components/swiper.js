import Swiper, { Autoplay, Navigation, Thumbs, Pagination, A11y } from 'swiper';
Swiper.use([Autoplay, Navigation, Thumbs, Pagination, A11y]);


export const swiper= () => {

const heroSection = document.querySelector('.hero');

if(heroSection) {
  const swiperHero = new Swiper('.swiper-hero', {
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    disableOnInteraction: false,
    slidesPerView: 1,
  });
}

const offersSection = document.querySelector('.offers');

if(offersSection) {
  const swiperOffers = new Swiper('.swiper-offers', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      766: {
        slidesPerView: 2,
      },
      1018: {
        slidesPerView: "auto",
      }
    }
  });
}

const usefulSection = document.querySelector('.useful');

if(usefulSection) {
  const swiperUseful = new Swiper('.swiper-useful', {
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      925: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1841: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  });
}

const productSection = document.querySelector('.product-section');

if (productSection) {
  const swiperBasic = new Swiper('.swiper-large-images', {
    watchSlidesProgress: true,
    thumbs: {
      swiper: {
        el: ".swiper-small-images",
        slidesPerView: 4,
      },
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
  });

  const swiperNav = new Swiper('.swiper-small-images', {
    slidesPerView: 2.6,
    spaceBetween: 38,
    direction: 'horizontal',
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
    breakpoints: {
      1200: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 38,
      },
      1009: {
        direction: 'horizontal',
        slidesPerView: 3.6,
        spaceBetween: 38,
      },
      766: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
}

const productSimilarSection = document.querySelector('.product-similar');

if(productSimilarSection) {
  const swiperProductSimilar = new Swiper('.swiper-product-similar', {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
    breakpoints: {
      1071: {
        slidesPerView: 4,
        spaceBetween: 38,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 38,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }
  });
}

const modalScale = document.querySelector('.modal--scale');

if(modalScale) {
  const swiperModal = new Swiper('.modal-slider', {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: {
        el: ".modal-slider-nav",
        slidesPerView: 4,
      },
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },
  });

  const swiperModalNav = new Swiper('.modal-slider-nav', {
    slidesPerView: 1,
    spaceBetween: 70,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 38,
      },
      1009: {
        slidesPerView: 3,
        spaceBetween: 38,
      },
      766: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }
  })
}
}

