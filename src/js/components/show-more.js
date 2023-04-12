export const showMore = () => {
  const showMore = document.querySelector('.high-rating__btn');
  const productsLength = document.querySelectorAll('.high-rating__cards').length;
  let items = 8;

  if(showMore) {
    showMore.addEventListener('click', () => {
      items += 4;
      const array = Array.from(document.querySelector('.high-rating__cards').children);
      const visItems = array.slice(0, items);

      visItems.forEach(el => el.classList.add('is-visible'));

      if (visItems.length === productsLength) {
        showMore.setAttribute('disabled', 'disabled')
      }
    });
  }
}
