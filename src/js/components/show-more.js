export const showMore = () => {
  const showMore = document.querySelector('.high-rating__btn');
  const productsLength = document.querySelectorAll('.card__item--rating').length;
  let items = 8;

  showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.card--rating').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
      showMore.setAttribute('disabled', 'disabled')
    }
  });
}
