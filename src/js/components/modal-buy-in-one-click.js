export const modalOneClick = () => {
  const modalClick = document.getElementById("modal-one-click");
  const modalClickClose = document.getElementById("modal-one-click-close");
  const oneClickBtn = document.getElementById("buy-in-one-click-btn");
  const modalSuccess = document.getElementById("modal-success");
  const modalSuccessClose =  document.getElementById("modal-success-close");
  const modalSuccessBtn = document.getElementById("modal-success-btn");

  oneClickBtn.addEventListener("click", function() {
    modalClick.classList.add("modal--open")
  })

  modalClickClose.addEventListener("click", function() {
    modalClick.classList.remove("modal--open")
  })

  modalSuccessBtn.addEventListener("click", function() {
    modalClick.classList.remove("modal--open")
    modalSuccess.classList.add("modal--open")
  })

  modalSuccessClose.addEventListener("click", function() {
    modalSuccess.classList.remove("modal--open")
  })
}

