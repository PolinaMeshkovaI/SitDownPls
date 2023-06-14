export const catalogDropdown = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelectorAll('.catalog-select__header');
    const dropdownMenu = document.querySelectorAll('.catalog-select__body');
    if(dropdownBtn) {
      dropdownBtn.forEach((el, index) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();

          const dropdownMenuClassList = dropdownMenu[index].classList;
          if (dropdownMenuClassList.contains('catalog-select__body--visible')) {
            dropdownMenuClassList.remove('catalog-select__body--visible')
            dropdownBtn[index].classList.remove('catalog-select__header--active')

          } else {
            dropdownMenu.forEach((el) => el.classList.remove('catalog-select__body--visible'))
            dropdownMenuClassList.add('catalog-select__body--visible')
            dropdownBtn.forEach((el) => el.classList.remove('catalog-select__header--active'))
            dropdownBtn[index].classList.add('catalog-select__header--active')
          }
        });
      });
    }
  }
)}
