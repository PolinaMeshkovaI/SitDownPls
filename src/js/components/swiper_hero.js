import Swiper, { Autoplay, Navigation } from 'swiper';
Swiper.use([Autoplay, Navigation]);

export const swiper= () => {
  const swiperHero = new Swiper('.swiper-hero', {
    autoplay: {
      delay: 6000,
    },
    loop: true,
    disableOnInteraction: false,
    slidesPerView: 1,
  });

  const swiperOffers = new Swiper('.swiper-offers', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

