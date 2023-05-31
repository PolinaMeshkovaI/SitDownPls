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
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
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
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
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

const productSimilarSection = document.querySelector('.product-similar');

if(productSimilarSection) {
  const swiperProductSimilar = new Swiper('.swiper-product-similar', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },
  });
}

const modalScale = document.querySelector('.modal--scale');

if(modalScale) {
  const swiperModal = new Swiper('.modal-slider', {
    slidesPerView: 1,
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
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },
  });

  const swiperModalNav = new Swiper('.modal-slider-nav', {
    slidesPerView: 4,
    spaceBetween: 70,
    centerInsufficientSlides: true,
  })
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
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },
  });

  const swiperNav = new Swiper('.swiper-small-images', {
    slidesPerView: 4,
    spaceBetween: 38,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    // breakpoints: {
    //   1071: {
    //     direction: 'horizontal',
    //     slidesPerView: 4,
    //     spaceBetween: 38,
    //   },

    //   993: {
    //     direction: 'horizontal',
    //     slidesPerView: 3.6,
    //     spaceBetween: 38,
    //   },

    //   577: {
    //     direction: 'vertical',
    //     slidesPerView: 4,
    //     spaceBetween: 18,
    //   },
    // },
  });


}
}

