export const modalScaleClick = () => {
  const modalScaleBtn = document.querySelectorAll(".swiper-large-images__button");
  const modalScale = document.getElementById("modal-scale");
  const modalScaleClose = document.getElementById("modal-scale-close");

  if(modalScale) {
    modalScaleBtn.forEach(el => el.addEventListener('click', function() {
      modalScale.classList.add("modal--open")
    }))

    modalScaleClose.addEventListener("click", function() {
      modalScale.classList.remove("modal--open")
    })
  }
}

