import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

export const swiperHero = () => {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 6000,
    },
    disableOnInteraction: false,
    slidesPerView: 1,
  })
}

