export const modalOneClick = () => {
  const modalClick = document.getElementById("modal-one-click");
  const modalClickClose = document.getElementById("modal-one-click-close");
  const oneClickBtn = document.getElementById("buy-in-one-click-btn");

  const modalScaleBtn = document.querySelectorAll(".product-picture__modal-btn");
  const modalScale = document.getElementById("modal-scale");
  const modalScaleClose = document.getElementById("modal-scale-close");

  oneClickBtn.addEventListener("click", function() {
    modalClick.classList.add("modal--open")
  })

  modalClickClose.addEventListener("click", function() {
    modalClick.classList.remove("modal--open")
  })

  modalScaleBtn.forEach(el => el.addEventListener('click', function() {
    modalScale.classList.add("modal--open")
  }))

  modalScaleClose.addEventListener("click", function() {
    modalScale.classList.remove("modal--open")
  })
}

