export const tabsBtn = () => {
  document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
    function createTabsDesktop() {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__btn')) {
          const tabsPath = e.target.dataset.tabsPath;
          let tabsItem = document.querySelectorAll(`[data-tabs="${tabsPath}"]`);
          let tabsBtnActive = document.querySelectorAll(`[data-tabs-path="${tabsPath}"]`);

          tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
          tabsItem.forEach(el => {el.classList.add('tabs__content--active')});

          tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
          tabsBtnActive.forEach(el => {el.classList.add('tabs__btn--active')});
        }
      });
    }

    function createTabsTablet() {
      tabsBtn.forEach(el => {el.classList.remove('is-hidden')});
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__btn')) {
          const tabsPath = e.target.dataset.tabsPath;
          let tabsItem = document.querySelectorAll(`[data-tabs-mobile="${tabsPath}"]`);
          let tabsBtnActive = document.querySelectorAll(`[data-tabs-path-mobile="${tabsPath}"]`);

          tabsContent.forEach(el => {el.classList.remove('tabs__content--active-mobile')});
          tabsItem.forEach(el => {el.classList.add('tabs__content--active-mobile')});


          tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
          tabsBtnActive.forEach(el => {el.classList.add('tabs__btn--active')});
        }
      });
    }

    const screenWidth = window.screen.width;
      if (screenWidth > 1008) {
        createTabsDesktop();
      } else {
        createTabsTablet();
      }
	}
});
}
