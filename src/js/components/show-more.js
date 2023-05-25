export const showMore = () => {
  const showMoreBtn = document.querySelector('.high-rating__btn');
  const mediaQuery1024 = window.matchMedia('(max-width: 1840px)');
  const mediaQuery768 = window.matchMedia('(max-width: 1080px)');
  let items;

  function showMore(n) {
    showMoreBtn.addEventListener('click', () => {
      items += n;
      const arrayCards = Array.from(document.querySelector('.high-rating__cards').children);
      const visItems = arrayCards.slice(0, items);
      visItems.forEach(el => el.classList.add('is-visible'));
      if (visItems.length === arrayCards.length) {
        showMoreBtn.setAttribute('disabled', 'disabled');
      }
    });
  }

  if(showMoreBtn) {
    if (mediaQuery768.matches) {
      items = 6;
      showMore(2);
    } else if (mediaQuery1024.matches) {
      items = 6;
      showMore(3);
    } else {
      items = 8;
      showMore(4);
    }
  }
}
