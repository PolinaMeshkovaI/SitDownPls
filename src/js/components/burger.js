export const burger = () => {
  document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav--768');
    const close =document.querySelector ('.nav__close');

    burger.addEventListener('click',
    function () {
      console.log("bhj");
        burger.classList.add('burger--active');
        menu.classList.add('header__nav--active');
        document.body.classList.add('dis-scroll');
    });

    close.addEventListener('click',
    function () {

        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('dis-scroll');
    })
});
}
