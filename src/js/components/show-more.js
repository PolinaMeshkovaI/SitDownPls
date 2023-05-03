export const showMore = () => {
  const showMoreBtn = document.querySelector('.high-rating__btn');
  const mediaQuery1024 = window.matchMedia('(max-width: 1840px)');
  let items;

  function showMore(n) {
    showMoreBtn.addEventListener('click', () => {
      items += n;
      const arrayCard = Array.from(document.querySelector('.high-rating__cards').children);
      const visItems = arrayCard.slice(0, items);
      visItems.forEach(el => el.classList.add('is-visible'));
      if (visItems.length === arrayCard.length) {
        showMoreBtn.setAttribute('disabled', 'disabled');
      }
    });
  }

  if(showMoreBtn) {
    if (mediaQuery1024.matches) {
      items = 6;
      showMore(3);
    } else {
      items = 8;
      showMore(4);
    }
  }
}
